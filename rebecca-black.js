const isFriday = (date) => {
    const d = new Date(date);
    return d.getDay() === 5;
};

const isWeekend = (date) => {
    const d = new Date(date);
    const day = d.getDay();
    return day === 0 || day === 6;
};

const isLeapYear = (date) => {
    const year = new Date(date).getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
};

const isLastDayOfMonth = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = d.getMonth();
    const lastDay = new Date(year, month + 1, 0).getDate();
    return d.getDate() === lastDay;
};
