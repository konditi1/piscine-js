const dogYears = (planet, age) => {
    if (planet === "earth") {
        return parseFloat(((1 * age / 31557600) * 7).toFixed(2))  
    } else if (planet === "mercury") {
       return parseFloat(((0.2408467 * age / 31557600) * 7).toFixed(2)) 
    } else if (planet === "venus") {
        return parseFloat(((0.61519726 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "mars") {
        return parseFloat(((1.8808158 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "jupiter") {
        return parseFloat(((11.862615 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "saturn") {
        return parseFloat(((29.447498 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "uranus") {
        return parseFloat(((84.016846 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "neptune") {
        return parseFloat(((164.79132 * age / 31557600) * 7).toFixed(2))
    }
}
