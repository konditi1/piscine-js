const dogYears = (planet, age) => {
    if (planet === "Earth") {
        return parseFloat(((1 * age / 31557600) * 7).toFixed(2))  
    } else if (planet === "Mercury") {
       return parseFloat(((0.2408467 * age / 31557600) * 7).toFixed(2)) 
    } else if (planet === "Venus") {
        return parseFloat(((0.61519726 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "Mars") {
        return parseFloat(((1.8808158 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "Jupiter") {
        return parseFloat(((11.862615 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "Saturn") {
        return parseFloat(((29.447498 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "Uranus") {
        return parseFloat(((84.016846 * age / 31557600) * 7).toFixed(2))
    } else if (planet === "Neptune") {
        return parseFloat(((164.79132 * age / 31557600) * 7).toFixed(2))
    }
}
