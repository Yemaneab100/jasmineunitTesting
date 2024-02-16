const nums = [ -3, 2, 4, 6, 7, 10 ];

function findIndexOf(arr, target){
    for(i = 0; i < target; i++){
        if(nums[i] == target)
            return i;
    }

    return -1
}

function binarySearch(arr, target){
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex){
        let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

        if(target == arr[middleIndex])
            return middleIndex;

        if(target < arr[middleIndex])
            rightIndex = middleIndex - 1; 

        else
            leftIndex = middleIndex + 1;         
    }

    return -1
}

console.log(findIndexOf(nums, 4));
console.log(findIndexOf(nums, 10));
console.log(findIndexOf(nums, 20));

console.log(binarySearch(nums, 4));
console.log(binarySearch(nums, 10));
console.log(binarySearch(nums, 20));






