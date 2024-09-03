const firstDayWeek = (num, yearStr) => {
    const year = parseInt(yearStr, 10);
    const firstJan = new Date(year, 0, 1);
    const dayOfWeek = firstJan.getDay();
    
    
    const offsetToMonday = (dayOfWeek === 0) ? -6 : 1 - dayOfWeek;
    
   
    const firstMonday = new Date(firstJan.getTime() + offsetToMonday * 86400000);
    const targetDate = new Date(firstMonday.getTime() + (num - 1) * 7 * 86400000);
    
    if (targetDate.getFullYear() < year) {
        return changeFormat(firstJan.toLocaleDateString());
    }

    return changeFormat(targetDate.toLocaleDateString());
};

const changeFormat = (date) => {
    let [month, day, year] = date.split('/');
    
    month = month.padStart(2, '0');
    day = day.padStart(2, '0');
    year = year.padStart(4, '0');
    
    return `${day}-${month}-${year}`;
};
