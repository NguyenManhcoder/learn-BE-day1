const students = [
    {
        name: 'Hung',
        score: 75
    },
    {
        name: 'Mai',
        score: 80
    },
    {
        name: 'Lan',
        score: 90
    }
]

function findMax(students){
    const maxScore = students.reduce((acc,student)=>{
        if(student.score >= acc.score){
            return student
        }
        else{
            return acc
        }
    })

    return maxScore
}

console.log(findMax(students))