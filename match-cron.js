const matchCron = (cron, date) => {
    const [minutePattern, hourPattern, dayOfMonthPattern, monthPattern, dayOfWeekPattern] = cron.split(' ');
    
    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
    const dayOfWeek = (date.getDay() + 1) % 7 || 7; // Convert 0-6 to 1-7 (1 = Monday, 7 = Sunday)

    // Helper function to check if a component matches its pattern
    const matchesPattern = (pattern, value) => {
        if (pattern === '*') {
            return true;
        }
        const number = parseInt(pattern, 10);
        return number === value;
    };

    return matchesPattern(minutePattern, minute) &&
           matchesPattern(hourPattern, hour) &&
           matchesPattern(dayOfMonthPattern, dayOfMonth) &&
           matchesPattern(monthPattern, month) &&
           matchesPattern(dayOfWeekPattern, dayOfWeek);
};
