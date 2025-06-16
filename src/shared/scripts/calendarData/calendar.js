// DON'T TOUCH THIS CODE
export const CalendarData = (date) => {
    const local = 'en-US';
    const dateInstance = new Date();
    // Get quantity of days in selected month
    const daysInMonth =  (month) => {
        return new Date(date.year, month + 1, 0).getDate();
    }
    // Get index of first day in week
    const dayOfWeek = new Date(date.year, date.month, 1).getDay();
    // Format for month
    const formatterMonth = new Intl.DateTimeFormat(local, { month: 'long' });
    // Get month full name
    const month = formatterMonth.format(new Date(date.year, date.month, date.day));
    // Get month in number
    const monthNumber = date.month+1;

    // Creating array days instance
    const formatterDays = new Intl.DateTimeFormat(local, { day: "numeric" });
    const days = Array.from( {length: daysInMonth(date.month)}, (_, i) => {
        const day = formatterDays.format(new Date(date.year, date.month, i + 1));
        return {day: day, month: monthNumber.toString(), year: date.year.toString()};
    });

    // Creating array previous month days instance
    const daysOfPrevMonth = Array.from( {length: dayOfWeek}, (_, i) => {
        const prevDays = formatterDays.format(new Date(date.year, date.month-1, daysInMonth(date.month-1)-dayOfWeek+i+1));
        return {day: prevDays, month: (monthNumber-1).toString(), year: date.year.toString()};
    })

    // Creating array next month days instance
    const daysOfNextMonth = Array.from({length: 42-(dayOfWeek+daysInMonth(date.month))}, (_, i) => {
        const nextMonthDay = formatterDays.format(new Date(date.year, date.month+1, i+1));
        return {day: nextMonthDay, month: (monthNumber+1).toString(), year: date.year.toString()};
    })


    const shortWeekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const longMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];


    let calendar = {}

    calendar.month = month;
    calendar.year = date.year;
    calendar.shortWeekDays = shortWeekDays;
    calendar.dayInMonth = daysInMonth(date.month);
    calendar.prevDays = daysOfPrevMonth;
    calendar.days = days;
    calendar.nextDays = daysOfNextMonth;
    calendar.allMonth = longMonth;
    calendar.currentDay = `${dateInstance.getDate()}.${dateInstance.getMonth()+1}.${dateInstance.getFullYear()}`;

    return calendar;
}
