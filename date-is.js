const isValid = date => {
    if (!(date instanceof Date) && typeof date !== "number") {
        return false;
    }

    let formatedDate = new Date(date)
    if (formatedDate.toString() === "Invalid Date") {
        return false
    }

    return true
}

const isAfter = (date1, date2) => {
    if (!isValid(date1) || !isValid(date2)) {
        return false
    }

    let formatedDate1 = new Date(date1)
    let formatedDate2 = new Date(date2)

    if (formatedDate1 > formatedDate2) {
        return true
    } else {
        return false
    }
}

const isBefore = (date1, date2) => {
    if (!isValid(date1) || !isValid(date2)) {
        return false
    }

    let formatedDate1 = new Date(date1)
    let formatedDate2 = new Date(date2)
    
    if (formatedDate1 < formatedDate2) {
        return true
    } else {
        return false
    }
}

const isFuture = date => {
    if (!isValid(date)) {
        return false
    }

    let formatedDate = new Date(date)
    if (formatedDate > new Date()) {
        return true
    } else {
        return false
    }
}

const isPast = date => {
    if (!isValid(date)) {
        return false
    }

    let formatedDate = new Date(date)
    if (formatedDate < new Date()) {
        return true
    } else {
        return false
    }
}
