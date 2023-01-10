module.exports = function reverse(n) {
    const absoluteN = Math.abs(n);
    const strN = String(absoluteN);
    const reverseStr = strN.split("").reverse().join("");
    return Number(reverseStr);
};
