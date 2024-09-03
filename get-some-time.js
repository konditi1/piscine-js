const firstDayWeek = (num, yearStr) => {
    const year = parseInt(yearStr, 10);
    const firstJan = new Date(`${year}-01-01`); // Force the correct year with a specific format
    const dayOfWeek = firstJan.getDay(); // Day of the week for January 1st
    
    // Calculate the offset from Monday (1). If Sunday (0), adjust to previous Monday (-6).
    const offsetToMonday = (dayOfWeek === 0) ? -6 : 1 - dayOfWeek;
    
    // Calculate the first Monday of the year
    const firstMonday = new Date(firstJan.getTime() + offsetToMonday * 86400000);
    
    // Calculate the target week date by adding (num - 1) weeks to the first Monday
    const targetDate = new Date(firstMonday.getTime() + (num - 1) * 7 * 86400000);
    
    // If the target week starts in the previous year, return January 1st of the given year
    if (targetDate.getFullYear() !== year) {
        return changeFormat(firstJan.toLocaleDateString());
    }

    return changeFormat(targetDate.toLocaleDateString());
};

const changeFormat = (date) => {
    let [month, day, year] = date.split('/');
    
    // Ensure the day and month are two digits and the year is four digits
    month = month.padStart(2, '0');
    day = day.padStart(2, '0');
    year = year.padStart(4, '0');
    
    return `${day}-${month}-${year}`;
};

// Example usage
console.log(firstDayWeek(2, '0001')); // Expected output: 08-01-0001
