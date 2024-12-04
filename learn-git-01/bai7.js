const arr = [5, 2, 9, 1]

function sortArrayAscending(arr){
    return arr.sort((a,b)=>a-b)
}

console.log(sortArrayAscending(arr))