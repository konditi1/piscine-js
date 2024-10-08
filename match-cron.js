function parseCron(inputCron) {
    let cron = {};
    inputCron.split(" ").forEach((part, i) => {
        if (part === "*") return;
        switch (i) {
            case 0:
                cron.minute = part;
                break;
            case 1:
                cron.hour = part;
                break;
            case 2:
                cron.date = part;
                break;
            case 3:
                cron.month = part;
                break;
            case 4:
                cron.day = part;
                break;
        }
    });
    return cron;
}

function convertDate(date) {
    return {
        minute: date.getMinutes(),
        hour: date.getHours(),
        date: date.getDate(),
        month: date.getMonth() + 1,
        day: date.getDay(),
    };
}

function cronMatches(cron, date) {
    for (let key in cron) {
        if (cron[key] !== date[key].toString()) {
            return false;
        }
    }
    return true;
}

function matchCron(inputCron, date) {
    const cron = parseCron(inputCron);
    const dateObject = convertDate(date);
    return cronMatches(cron, dateObject);
}
