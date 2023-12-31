const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  const result = [];
  let currentChunk = [];

  for (const num of arr) {
    // Check if adding the current number exceeds the maximum sum
    if (currentChunk.reduce((sum, val) => sum + val, 0) + num > n) {
      result.push([...currentChunk]);
      currentChunk = [num];  // Start a new chunk
    } else {
      currentChunk.push(num);
    }
  }

  // Append the last chunk
  result.push([...currentChunk]);

  return result;
};

// const userN = prompt("Enter n: ");
// const result = divide(arr, parseInt(userN, 10));
// alert(JSON.stringify(result));
