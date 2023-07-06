let arreglo = [3,2,3,4,6,8,1,2,5,5,7,2];

const reemplazar = (array) =>{
    let repetido=0;
    for(let i=0; i<=array.length; i++){
        if(array[i] === array[array.length-1]){
            repetido++;
            if(repetido==2){
                array[i] = array[array.length-2];
                array.splice(i+1, array.length);
                return array;
            }
        }
    }
}

console.log(reemplazar(arreglo));