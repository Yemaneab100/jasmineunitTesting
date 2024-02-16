
function fabonacci(n){
    let fab = [0, 1];
    
    for (let i = 2; i < n; i++){
        fab[i] = fab[i-1] + fab[i-2];
      
    }

    return fab;
} 

function recurciveFabonacci(n){
    if(n<=1){
        return 1
    }
    return recurciveFabonacci(n-1) + recurciveFabonacci(n-2);
}

console.log(fabonacci(5));
console.log(recurciveFabonacci(5));


module.exports = {
    fabonacci : fabonacci
}