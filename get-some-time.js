// Calculate the number of milliseconds for the week
const calculateWeekMilliseconds = (num) => {
    return (86400000 * num) * 7;
};

// Get the initial date for the specified week
const getInitialDateForWeek = (date, week) => {
    return (date.getTime() + week) - (86400000 * 7);
};

// Adjust the date to the nearest previous Monday within the same year
const adjustToNearestMonday = (n, currentYear) => {
    while ((new Date(n).getDay()) !== 1 && (new Date(n - 86400000).getYear()) === currentYear) {
        n -= 86400000;
    }
    return n;
};

// Main function to find the first day of the specified week
const firstDayWeek = (num, str) => {
    let week = calculateWeekMilliseconds(num);
    let date = new Date(str);
    let n = getInitialDateForWeek(date, week);
    let currentYear = (new Date(n)).getYear();
    
    n = adjustToNearestMonday(n, currentYear);

    return changeFormat((new Date(n)).toLocaleDateString());
};

const splitAndSwapDate = (date) => {
    let [month, day, year] = date.split('/');
    return [day, month, year];
};

const padDayMonth = (dayMonth) => {
    return dayMonth.padStart(2, '0');
};

const padYear = (year) => {
    return year.padStart(4, '0');
};

const changeFormat = (date) => {
    let [day, month, year] = splitAndSwapDate(date);
    
    day = padDayMonth(day);
    month = padDayMonth(month);
    year = padYear(year);
    
    return `${day}-${month}-${year}`;
};
