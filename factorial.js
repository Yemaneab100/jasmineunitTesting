function factorial(n){
    let result = 1;
    for(let i = 2; i <= n; i++){
        result = result * i;
    }

    return result;
}

function recurciveFactorial(n){
    if(n <= 1){
        return 1
    }
    return n * recurciveFactorial(n-1);
}

console.log(recurciveFactorial(3));
console.log(factorial(3));