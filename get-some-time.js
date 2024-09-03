const firstDayWeek = (num, str) => {
    const oneDayMs = 86400000;
    const oneWeekMs = oneDayMs * 7;
    const startDate = new Date(str);
    const targetDate = new Date(startDate.getTime() + (oneWeekMs * num));

    // Find the Monday of the target week
    while (targetDate.getDay() !== 1) {
        targetDate.setTime(targetDate.getTime() - oneDayMs);
    }

    return formatDate(targetDate.toLocaleDateString());
};

const formatDate = (date) => {
    let [month, day, year] = date.split('/');
    month = month.padStart(2, '0');
    day = day.padStart(2, '0');
    year = year.padStart(4, '0');
    
    return `${day}-${month}-${year}`;
};

console.log(firstDayWeek(2, '0001'));
