const firstDayWeek = (num, str) => {
    const oneDayMs = 86400000; // One day in milliseconds
    const year = parseInt(str, 10); // Convert year string to an integer
    const startDate = new Date(year, 0, 1); // January 1st of the given year

    // Calculate the first day of the target week
    let n = startDate.getTime() + (num - 1) * 7 * oneDayMs;

    // Adjust n to get to the first day of that week (Monday)
    const firstDay = new Date(n).getDay();
    n -= (firstDay === 0 ? 6 : firstDay - 1) * oneDayMs; // Adjust to Monday

    // If the target week starts in the previous year, return January 1st of the given year
    const resultDate = new Date(n);
    if (resultDate.getFullYear() !== year) {
        return changeFormat(startDate.toLocaleDateString());
    }

    return changeFormat(resultDate.toLocaleDateString());
};

const changeFormat = (date) => {
    let [month, day, year] = date.split('/');
    
    // Ensure the day and month are two digits and the year is four digits
    month = month.padStart(2, '0');
    day = day.padStart(2, '0');
    year = year.padStart(4, '0');
    
    return `${day}-${month}-${year}`;
};
