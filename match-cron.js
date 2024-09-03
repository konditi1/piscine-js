// Function to parse the cron string and return an object with cron fields
const parseCron = (cronString) => {
    const fields = cronString.split(" ");
    return {
        minute: fields[0] !== "*" ? fields[0] : null,
        hour: fields[1] !== "*" ? fields[1] : null,
        date: fields[2] !== "*" ? fields[2] : null,
        month: fields[3] !== "*" ? fields[3] : null,
        day: fields[4] !== "*" ? fields[4] : null,
    };
};

// Function to extract date components from a Date object
const extractDateComponents = (date) => {
    return {
        minute: date.getMinutes(),
        hour: date.getHours(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        day: (date.getDay() + 1) % 7 || 7,
    };
};

// Function to compare the cron pattern with the date components
const matchesPattern = (pattern, value) => {
    return pattern === null || pattern === value.toString();
};

// Main function to check if the date matches the cron pattern
const matchCron = (inputCron, date) => {
    const cron = parseCron(inputCron);
    const dateComponents = extractDateComponents(date);

    // Compare each component
    return Object.keys(cron).every(key => matchesPattern(cron[key], dateComponents[key]));
};
