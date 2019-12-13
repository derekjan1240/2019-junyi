function Q1_sol1(str){
    let result = '';
    let strArr = str.split(' ');
    for(let voc of strArr){
        result += `${voc.split('').reverse().join('')} `;
    }
    return result
}

function Q1_sol2(str){
    let result = [], temp='';
    
    for(let char of str){
        if(char === ' '){
            result.push(temp);
            temp = '';
        }else{
            temp = char + temp;
        }
    }
    result.push(temp);

    return result.join(' ')
}

function Q1_sol3(str){
    let result = '', temp ='';
    for(let char of str){
        if(char === ' '){
            result+=`${temp} `;
            temp='';
        }else{
            temp = char + temp
        }
    }
    result+=`${temp} `;

    return result
}

console.log(Q1_sol1("junyiacademy"));
console.log(Q1_sol1("flipped class room is important"));

console.log(Q1_sol2("junyiacademy"));
console.log(Q1_sol2("flipped class room is important"));

console.log(Q1_sol3("junyiacademy"));
console.log(Q1_sol3("flipped class room is important"));