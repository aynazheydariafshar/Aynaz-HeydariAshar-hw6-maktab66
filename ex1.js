function solution(inputone , inputtwo){
    let count = 0
    const chartwo = inputtwo.split("")
    for(let i of inputone){
      let element = chartwo.findIndex(index => index === i)
      if(element >= 0){
        count++
        chartwo.splice(element, 1)
      }
    }
    return count
}

console.log(solution("aabcc","adcaa"))