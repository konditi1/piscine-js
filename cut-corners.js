const round = num => {
    let neg = false;
    if (num < 0) {
        neg = true;
        num = -num;
    }

    if (num - parseint(num) >= 0.5) {
        num = parseint(num) + 1;
    } else {
        num = parseint(num);
    }

    return neg ? -num : num;
};

const ceil = num => {
    if (num < 0) {
        return parseint(num);  // For negative numbers, ceil is the integer part
    } else {
        return (num - parseint(num) > 0) ? parseint(num) + 1 : parseint(num);
    }
};

const floor = num => {
    if (num < 0) {
        return (num === parseint(num)) ? num : parseint(num) - 1;
    } else {
        return parseint(num);
    }
};

const trunc = num => parseint(num);

const parseint = num => {
    if (num >= 0) {
        // For positive numbers, use the fact that the integer part is the floor of num
        return num - (num % 1);
    } else {
        // For negative numbers, use the fact that the integer part is the ceiling of num
        return num - (num % 1);
    }
};
console.log(parseint(4.2))