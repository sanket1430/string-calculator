function add(numbers) {
  if (numbers === "") {
    return 0;
  }
  const numList = numbers.startsWith('//') 
    ? numbers.slice(numbers.indexOf('\n') + 1).split(numbers[2]).map(num => parseInt(num)) 
    : numbers.replace(/\n/g, ',').split(',').map(num => parseInt(num));

  const negatives = numList.filter(num => num < 0);
  
  if (negatives.length > 0) {
    throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);
  }

  return numList.reduce((acc, curr) => acc + curr, 0);
}

module.exports = { add };
  
