const arr = [1, 2, 3, 2, 1, 2]

function findMostFrequent(arr){
    let frequency = {};

  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  let mostFrequentElement = null;
  let maxFrequency = 0;

  for (let key in frequency) {
    if (frequency[key] > maxFrequency) {
      maxFrequency = frequency[key];
      mostFrequentElement = key;
    }
  }

  return mostFrequentElement;
}

console.log(findMostFrequent(arr))
