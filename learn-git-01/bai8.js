const arr = [1, 2, 3, 2, 1, 2]

function findMostFrequent(arr){
    let frequency = {};

  // Duyệt qua mảng và cập nhật tần suất vào đối tượng
  for (let num of arr) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  // Tìm phần tử có tần suất cao nhất
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