import type { DocumentData } from "@google-cloud/firestore";
import type { User } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";

export default function() {

    const nuxt = useNuxtApp()
    const db = nuxt.$db

    class CalendarLogic {
        public year: number
        public monthName: string 
        public monthNum: number
        public days: CalendarDay[][]

        constructor(date: Date) {
            this.year = date.getFullYear()
            this.monthNum = date.getMonth() + 1;
            this.monthName = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][this.monthNum - 1];

            const daysByMonth = [31, (this.year) % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            const daysInLastMonth = daysByMonth[date.getMonth() - 1 % 12];
            const daysInMonth = daysByMonth[date.getMonth()];
        
            let days: CalendarDay[][] = [[], [], [], [], [], []]
            let firstDay = ((new Date(`${this.year}-${date.getMonth()+1}-1`)).getDay() -1) % 7   
            for (let i = 0; i < firstDay; i++) {
                days[0][i] = {
                    day: daysInLastMonth - (firstDay-i-1),
                    month: (this.monthNum == 1) ? 12 : this.monthNum - 1,
                    year: (this.monthNum == 1) ? this.year - 1 : this.year,
                    currentMonth: false
                }
            }
        
            let d = 1
            for (let i = firstDay; i < daysInMonth + firstDay; i++) {
                days[Math.floor(i / 7)][i % 7] = {
                    day: d,
                    month: this.monthNum,
                    year: this.year,
                    currentMonth: true
                }
                d++
            }
        
            if ((daysInMonth + firstDay) % 7 != 0 ) {
                let d2 = 1
                for (let i = (daysInMonth + firstDay) % 7; i < 7; i++) {
                    days[Math.floor((daysInMonth + firstDay)/7)][i] = {
                        day: d2,
                        month: (this.monthNum == 12) ? 1 : this.monthNum + 1,
                        year: (this.monthNum == 12) ? this.year + 1 : this.year,
                        currentMonth: false
                    } 
                    d2++
                }
            }
        
            this.days = days.filter((xs) => xs.length != 0)
        }



    }

    async function getCollection(user: User, collectionName: string): Promise<Map<string, DocumentData>> {
        const querySnapshot = await getDocs(collection(db, `users/${user.uid}/${collectionName}`))
        const _collection: Map<string, DocumentData> = new Map()
        querySnapshot.forEach((doc) => {
            _collection.set(doc.id, doc.data())
        })
        return _collection
    }

    return {
        CalendarLogic,
        getCollection
    }
}