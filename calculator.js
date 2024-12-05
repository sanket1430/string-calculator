function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  if (numbers.startsWith('//')) {
    const delimiterEndIndex = numbers.indexOf('\n');
    const delimiter = numbers.slice(2, delimiterEndIndex);
    numbers = numbers.slice(delimiterEndIndex + 1);
    const numList = numbers.split(delimiter).map(num => parseInt(num));
    return numList.reduce((acc, curr) => acc + curr, 0);
  }
  const numList = numbers.replace(/\n/g, ',').split(',').map(num => parseInt(num));
  return numList.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { add };
  
