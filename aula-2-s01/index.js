function mrv(arr){
    let mv = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > mv){
            mv = arr[i];
        }
    }
    return mv;
}

const valores = [10, 5, 8, 20, 3];

console.log('Maior valor: ', mrv(valores));
