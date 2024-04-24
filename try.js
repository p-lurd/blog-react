

function minNumber (arr){
    let currentMin = arr[0];
    arr.forEach(num => {
            if(num < currentMin) {currentMin = num};
            
    })
    return currentMin;
};

// const arr = [2,3,4,5,1,6,7,8];
// console.log(minNumber(arr));

function sumOfGP(a,r,n){
    let arrOfGP = [a];
    let i = 1
    while (i<n-1){
        let newNum = arrOfGP[i-1]*r;
        arrOfGP.push(newNum);
        i++;

    }
    let sum = 0;
    arrOfGP.forEach(num=>{
        sum += num;
    })
    return sum;
}

console.log(sumOfGP(1,2,5))