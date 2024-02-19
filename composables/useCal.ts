export default function (date: Date) {

    const year = date.getFullYear();
    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][date.getMonth()];
    
    
    const daysInLastMonth = [31, (year) % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth() - 1 % 12];
    const daysInMonth = [31, (year) % 4 == 0 ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][date.getMonth()];
    const days: Number[][] = [[], [], [], [], [], []]

    function computeDays() {
        let firstDay = ((new Date(`${year}-${date.getMonth()+1}-1`)).getDay() -1) % 7
        const lastDay = ((new Date(`${year}-${date.getMonth()}-${daysInMonth}`)).getDay() -1) % 7
    
    
        for (let i = 0; i < firstDay; i++) {
            days[0][i] = daysInLastMonth - (firstDay-i-1)
        }
    
        let d = 1
        for (let i = firstDay; i < daysInMonth + firstDay; i++) {
            days[Math.floor(i / 7)][i % 7] = d
            d++
        }
    
        if ((daysInMonth + firstDay) % 7 != 0 ) {
            let d2 = 1
            for (let i = (daysInMonth + firstDay) % 7; i < 7; i++) {
                days[Math.floor((daysInMonth + firstDay)/7)][i] = d2 
                d2++
            }
        }
    
        return days.filter((xs) => xs.length != 0)
    }    

    return {
        year,
        month,
        computeDays
    }
}