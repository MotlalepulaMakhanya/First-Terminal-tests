export default function yearsAgo(year) {
    var currentYear = new Date().getFullYear();
    var yearsDifference = currentYear - year;
    return yearsDifference;
}
