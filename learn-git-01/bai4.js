const arr =[ 1, 2, 3, 2, 1, 2]

function countOccurrence (arr , index){
    let dem = 0

    console.log('index: ', index)
     arr.reduce((acc,cur)=>{
        if(acc == index){
            dem = dem + 1
        }
    })

    return dem
}

console.log(countOccurrence(arr,1))