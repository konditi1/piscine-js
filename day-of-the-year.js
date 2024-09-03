const dayOfTheYear = (date) => {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    return Math.ceil((date - startOfYear) / 86400000) + 1;
}

const isFirstofFirst = (date) => {
    return date.getDate() === 1 && date.getMonth() === 0;
}