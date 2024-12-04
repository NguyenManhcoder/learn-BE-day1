const arr1 = [1, 2, 3]
const arr2 = [2, 3, 4]

function mergeAndRemoveDuplicates(arr1,arr2){
     arr1.push(...arr2)

    return [...new Set(arr1)]
}

console.log(mergeAndRemoveDuplicates(arr1,arr2))