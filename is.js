is.num = num => typeof num === "number"
is.nan = nan => isNaN(nan)
is.str = str => typeof str === "string"
is.bool = bool => typeof bool === "boolean"
is.undef = undef => typeof undef === "undefined"
is.truthy = truthy => truthy ? true : false
is.falsy = falsy => falsy ? true : false
is.fun = fun => typeof fun === "function"
is.def = def => def ? true : false
is.arr = arr => Array.isArray(arr)
is.obj = obj => typeof obj === "object"
