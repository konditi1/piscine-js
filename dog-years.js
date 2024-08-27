const dogYears = (planet, age) => {
    if (planet === "Earth") {
        return (1 * age / 31557600) * 7
    } else if (planet === "Mercury") {
        return (0.2408467 * age / 31557600) * 7
    } else if (planet === "Venus") {
        return (0.61519726 * age / 31557600) * 7
    } else if (planet === "Mars") {
        return (1.8808158 * age / 31557600) * 7
    } else if (planet === "Jupiter") {
        return (11.862615 * age / 31557600) * 7
    } else if (planet === "Saturn") {
        return (29.447498 * age / 31557600) * 7
    } else if (planet === "Uranus") {
        return (84.016846 * age / 31557600) * 7
    } else if (planet === "Neptune") {
        return (164.79132 * age / 31557600) * 7
    }
}

console.log(dogYears("Mercury", 1000000000))