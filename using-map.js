const citiesOnly = cities => cities.map(city => city.city)

const upperCasingStates = states => states.map(state => {
    return state
       .split(" ")
       .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1).toLowerCase()
    )
    .join(" ")
})

const fahrenheitToCelsius = arr => arr.map(val => {
    let splitVal = val.split("°")
    num = Number(splitVal[0])
    return (Math.floor((num - 32)/1.8))    
})

const trimTemp = temps => temps.map(temp => {
    let trimed = temp.temperature.trim().split(" ").join("")
    return {...temp, temperature: trimed }  //  city: temp.city
})

const tempForecasts = arr => arr.map ()

console.log(trimTemp([
    { city: 'Los Angeles', temperature: '  101 °F   ' },
    { city: 'San Francisco', temperature: ' 84 ° F   ' },
  ]))