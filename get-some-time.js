    /**
     * Returns the first Monday of the week that is num weeks away from str.
     * 
     * @param {number} num - The number of weeks to offset by
     * @param {string} str - The date string to base the offset on
     * @returns {string} - The first monday of that week
     */
    
const firstDayWeek = (num, str) => {
    const oneDayMs = 86400000;
    const oneWeekMs = oneDayMs * 7; 
    const date = new Date(str);
    
    // Calculate the target week
    const targetDate = new Date(date.getTime() + oneWeekMs * num);
    const currentYear = targetDate.getFullYear();

    // Adjust the target date to the first Monday of that week
    while (targetDate.getDay() !== 1 && targetDate.getFullYear() === currentYear) {
        targetDate.setTime(targetDate.getTime() - oneDayMs);
    }

    return changeFormat(targetDate.toLocaleDateString());
}

const changeFormat = (date) => {
    let [month, day, year] = date.split('/');
    
    // Ensure the day and month are two digits and the year is four digits
    month = month.padStart(2, '0');
    day = day.padStart(2, '0');
    year = year.padStart(4, '0');
    
    return `${day}-${month}-${year}`;
}