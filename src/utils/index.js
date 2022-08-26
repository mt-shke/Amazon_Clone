export const formatPrice = (number) => {
    const numString = String(number);
    const slicedPrice = numString.slice(numString.length - 2);
    const firstPart = numString.slice(0, numString.length - 2);
    return [firstPart, ",", slicedPrice].join("");
};
