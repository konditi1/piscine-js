const firstDayWeek = (num, str) => {
    const oneDayMs = 86400000; // One day in milliseconds
    const startDate = new Date(str);

    // Calculate the first day of the target week
    let n = startDate.getTime() + (num * 7 * oneDayMs);

    // Adjust n to get to the first day of that week (Monday)
    const firstDay = new Date(n).getDay();
    n -= (firstDay - 1) * oneDayMs; // Adjust by the difference to Monday

    // Ensure we are still within the correct year
    const resultDate = new Date(n);
    if (resultDate.getFullYear() !== startDate.getFullYear()) {
        resultDate.setFullYear(startDate.getFullYear());
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
