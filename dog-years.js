const dogYears = (planet, age) => {
    if (planet === "Earth") {
        num = (1 * age / 31557600) * 7
        return parseFloat(num.toFixed(2))
    } else if (planet === "Mercury") {
        num = (0.2408467 * age / 31557600) * 7
        return parseFloat(num.toFixed(2))
    } else if (planet === "Venus") {
        num = (0.61519726 * age / 31557600) * 7
        return parseFloat(num.toFixed(2))
    } else if (planet === "Mars") {
        num = (1.8808158 * age / 31557600) * 7
        return parseFloat(num.toFixed(2))
    } else if (planet === "Jupiter") {
        num = (11.862615 * age / 31557600) * 7
        return parseFloat(num.toFixed(2))
    } else if (planet === "Saturn") {
        num = (29.447498 * age / 31557600) * 7
        return parseFloat(num.toFixed(2))
    } else if (planet === "Uranus") {
        num = (84.016846 * age / 31557600) * 7
        return parseFloat(num.toFixed(2))
    } else if (planet === "Neptune") {
        num = (164.79132 * age / 31557600) * 7
        return parseFloat(num.toFixed(2))
    }
}

console.log(dogYears("Earth", 1000000000))