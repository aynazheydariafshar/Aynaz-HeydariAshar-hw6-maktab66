function solution(input){
    const res = []
    for(let i=0 ; i<input.length ; i++){
        if(input[i] === -1){
            res.push(i) //find index of -1
        }
    }

    input.sort(function(a, b) {
        return a - b; //sort array
    })

    for(let k=0 ; k<res.length ; k++){
        input.splice(0,k) //delete -1 from array
    }

    for(let j of res){
        input.splice(j, 0, -1) //add -1 to array
    }

    return input

}
console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))