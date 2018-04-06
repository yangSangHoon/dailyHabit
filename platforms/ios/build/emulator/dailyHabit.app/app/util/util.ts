export const addZeroDigit = (number, digit = 2) => {
    let numText = String(number);
    const length = digit - numText.length;
    for (let i = 0; i < length; i++) {
        numText = `0${numText}`;
    }
    return numText;
};