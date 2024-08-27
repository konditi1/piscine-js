const dogYears = (planet, age) => {
    if (planet === "earth") {
        return parseFloat(((1 * age / 31557600) * 7).toFixed(2))  
    } else if (planet === "mercury") {
       return parseFloat(( age / (0.2408467 * 31557600) * 7).toFixed(2)) 
    } else if (planet === "venus") {
        return parseFloat((age / (0.61519726 * 31557600) * 7).toFixed(2))
    } else if (planet === "mars") {
        return parseFloat((age / (1.8808158 * 31557600) * 7).toFixed(2))
    } else if (planet === "jupiter") {
        return parseFloat((age / (11.862615 * 31557600) * 7).toFixed(2))
    } else if (planet === "saturn") {
        return parseFloat((age / (29.447498 * 31557600) * 7).toFixed(2))
    } else if (planet === "uranus") {
        return parseFloat((age / (84.016846 * 31557600) * 7).toFixed(2))
    } else if (planet === "neptune") {
        return parseFloat((age / (164.79132 * 31557600) * 7).toFixed(2))
    }
}
