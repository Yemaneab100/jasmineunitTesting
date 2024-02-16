
function bubbleSort(arr){
    let n = arr.length - 1;

    for(let i = 0; i < n; i++){
        for(let j = 0; j < n -i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr
}

function bubbleDoWhile(arr){
    let swapped;
    do {
        swapped = false
        for(let i = 0; i < arr.length -1; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }

    } while(swapped)

    return arr;
}

console.log(bubbleSort([1, 2, 5, 3, 4, 7]));
console.log(bubbleDoWhile([1, 2, 5, 3, 4, 7]));