function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const numList = numbers.split(',').map(num => parseInt(num));
  return numList.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { add };
  
