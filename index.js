module.exports = (min, max) => {
  return isNaN(parseInt(max)) || isNaN(parseInt(min))
    ? []
    : max > min
        ? Array(max - min + 1).fill(null).map((i, j) => min++)
        : Array(min - max + 1).fill(null).map((i, j) => min--);
};
