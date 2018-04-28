const getrange = (min,max) => {
  return max > min
  ? Array(max-min+1).fill(null).map((i,j) => min++)
  : Array(min-max+1).fill(null).map((i,j) => min--)
}
