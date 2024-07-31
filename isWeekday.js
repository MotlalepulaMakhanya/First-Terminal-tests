export default function isWeekday(day) {
    var daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
    var formattedDay = day.charAt(0).toUpperCase() + day.slice(1).toLowerCase();
    return daysOfWeek.includes(formattedDay);
}
 