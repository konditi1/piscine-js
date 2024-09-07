const getElements = (selector) => Array.from(document.querySelectorAll(selector));

const getElementById = (id) => document.getElementById(id);

export const getArchitects = () => [
    getElements("body a"), 
    getElements("body span")
];

export const getClassical = () => [
    getElements("a.classical"),
    getElements("a:not(.classical)")
];

export const getActive = () => [
    getElements("a.classical.active"),
    getElements("a.classical:not(.active)")
];

export const getBonannoPisano = () => [
    getElementById("BonannoPisano"), 
    getElements("a.classical.active")
];
