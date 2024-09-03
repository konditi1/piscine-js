const addWeek = date => {
    const daysOfWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        "secondMonday",
        "secondTuesday",
        "secondWednesday",
        "secondThursday",
        "secondFriday",
        "secondSaturday",
        "secondSunday",
    ]
    const epoch = "0001-01-01"

    let epochMilliseconds = new Date(epoch).getTime()
    let currentMilliseconds = new Date(date).getTime()

    let timeInMilliseconds = currentMilliseconds - epochMilliseconds
    let days = timeInMilliseconds / 86400000 

    return daysOfWeek[days % 14]

}

const timeTravel = (obj) => {
    let formatedTime = new Date(obj.date)
    formatedTime.setHours(obj.hour)
    formatedTime.setMinutes(obj.minute)
    formatedTime.setSeconds(obj.second)

    return formatedTime
}
