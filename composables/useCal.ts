export default function() {
    type CalendarDay = {
        day: Number,
        currentMonth: Boolean
    }
    class CalendarLogic {
        public year: number
        public month: string 
        public days: CalendarDay[][]

        constructor(date: Date) {
            this.year = date.getFullYear()
            this.month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];

            const daysByMonth = [31, (this.year) % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
            const daysInLastMonth = daysByMonth[date.getMonth() - 1 % 12];
            const daysInMonth = daysByMonth[date.getMonth()];
        
            let days: CalendarDay[][] = [[], [], [], [], [], []]
            let firstDay = ((new Date(`${this.year}-${date.getMonth()+1}-1`)).getDay() -1) % 7   
            for (let i = 0; i < firstDay; i++) {
                days[0][i] = {
                    day: daysInLastMonth - (firstDay-i-1),
                    currentMonth: false
                }
            }
        
            let d = 1
            for (let i = firstDay; i < daysInMonth + firstDay; i++) {
                days[Math.floor(i / 7)][i % 7] = {
                    day: d,
                    currentMonth: true
                }
                d++
            }
        
            if ((daysInMonth + firstDay) % 7 != 0 ) {
                let d2 = 1
                for (let i = (daysInMonth + firstDay) % 7; i < 7; i++) {
                    days[Math.floor((daysInMonth + firstDay)/7)][i] = {
                        day: d2,
                        currentMonth: false
                    } 
                    d2++
                }
            }
        
            this.days = days.filter((xs) => xs.length != 0)
        }



    }

    return {
        CalendarLogic
    }
}