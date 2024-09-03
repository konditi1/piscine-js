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
    formatedTime = new Date(obj.date)

    return formatedTime
}

// console.log(timeTravel({
//   date: new Date('2020-05-29 23:25:22'),
//   hour: 21,
//   minute: 22,
//   second: 22,
// }).toString())

// console.log(addWeek("0001-01-09"))