const citiesOnly = (cities) => cities.map(city => city.city)

const upperCasingStates = arr => arr.map(val => {
    let splitArr = val.split(" ")
    let capitalizedArr = splitArr.map(splitVal => {
        return splitVal.charAt(0).toUpperCase() +
         splitVal.slice(1).toLowerCase()
        
    })
    return capitalizedArr.join(" ")
})

const fahrenheitToCelsius = arr => arr.map(val => {
    splitVal = val.split("°")
    num = Number(splitVal[0])
    return (Math.floor((num - 32)/1.8))    
})

const trimTemp = arr => arr.map(val => {
    let splitVal = val.temperature.split(" ")
    let joinedVal = splitVal.join("")
    return {...val, temperature: joinedVal}
})

console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ]))