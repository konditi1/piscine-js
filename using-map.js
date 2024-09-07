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
    let num = Number(splitVal[0])
    return (Math.floor((num - 32)/1.8) + "°C")    
})

const trimTemp = temps => temps.map(temp => {
    let trimed = temp.temperature.trim().split(" ").join("")
    return {...temp, temperature: trimed }  //  city: temp.city
})

const tempForecasts = (arr) => {
    return arr.map(({ temperature, city, state }) => {
        return `${celsius(temperature)} in ${city}, ${caps(state)}`;
    });
};

const celsius = (temp) => {
    const fahrenheit = parseInt(temp, 10);
    const celsiusValue = Math.floor((fahrenheit - 32) * (5/9));
    return `${celsiusValue}°Celsius`;
};

const caps = (str) => {
    return str.split(' ')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');
};
