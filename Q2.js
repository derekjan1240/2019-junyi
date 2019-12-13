function Q2_sol1(num){
    let result = 0;
    for(let i =0; i<num; i++){
        if( i%3 != 0 && i%5 !=0){
            result++
        }
        if(i%3 === 0 && i%5 ===0){
            result ++
        }
    }
    return result;
}

function Q2_sol2(num){
    let result = num;
    for(let i =0; i<num; i++){
        if(i%3 === 0 && i%5 ===0){
            // result 不變
        }else if(i%3 === 0 || i%5 ===0){
            result--;
        }
    }
    return result;
}

function Q2_sol3(num){
    let result = num;
    for(let i =0; i<num; i++){
        if(i%3 ===0 || i%5 === 0){
            result--;
        }
        if(i%3 === 0 && i%5 ===0){
            result++;
        }
    }
    return result;
}


console.log(Q2_sol1(15))
console.log(Q2_sol2(15))
console.log(Q2_sol3(15))