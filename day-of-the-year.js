function dayOfTheYear(date) {
    // Create a Date object representing the first day of the year
    let startOfYear = new Date(date.getFullYear(), 0, 1);
    
    // Calculate the difference in milliseconds between the two dates
    let diffInMs = date - startOfYear;

    let millisecondsInDay = 24 * 60 * 60 * 1000;
    
    // Convert the difference from milliseconds to days
    let dayOfYear = Math.floor(diffInMs / (millisecondsInDay)) + 1;
    
    return dayOfYear;
}
