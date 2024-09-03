const isValidDateObj = (date) => date instanceof Date && !isNaN(date);
function isValid(date) {
    if (typeof date === 'number' && !isNaN(date)) {
        const newDate = new Date(date)
        return isValidDateObj(newDate)
    }
    return isValidDateObj(date);
  }

console.log(isValid("2020-01-01"))

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
