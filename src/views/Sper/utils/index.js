export const separateDigitsInNumber = (number, separator = '.') => number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator)
