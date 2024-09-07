function countLeapYears(date) {
    const year = date.getFullYear();
    
    let leapYearsCount = 0;

    for (let y = 1; y < year; y++) {
        if (isLeapYear(y)) {
            leapYearsCount++;
        }
    }

    return leapYearsCount;
}

function isLeapYear(year) {
    return (year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0);
}
