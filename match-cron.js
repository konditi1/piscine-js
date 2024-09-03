const matchCron = (cron, date) => {
    const [minutePattern, hourPattern, dayOfMonthPattern, monthPattern, dayOfWeekPattern] = cron.split(' ');
    
    const minute = date.getMinutes();
    const hour = date.getHours();
    const dayOfMonth = date.getDate();
    const month = date.getMonth() + 1; // JavaScript months are 0-indexed
    const dayOfWeek = (date.getDay() + 1) % 7 || 7; // Convert to 1-7 range (1 = Monday, 7 = Sunday)

    // Helper function to check if a component matches its pattern
    const matchesPattern = (pattern, value) => {
        return pattern === '*' || parseInt(pattern, 10) === value;
    };

    return matchesPattern(minutePattern, minute) &&
           matchesPattern(hourPattern, hour) &&
           matchesPattern(dayOfMonthPattern, dayOfMonth) &&
           matchesPattern(monthPattern, month) &&
           matchesPattern(dayOfWeekPattern, dayOfWeek);
};
