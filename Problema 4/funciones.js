let arrayContenedores = [], arrayStorageLocal = [];
var index=0;

const push = (contenedor) =>{
    arrayContenedores[index] = contenedor;
    index++;
}

 

const pop = (tirarContenedor) =>{
    for(let i=index; i>=0; i--){
        arrayStorageLocal[index-i] = arrayContenedores[i];
        if(arrayContenedores[i] === tirarContenedor){
            arrayContenedores.splice(i, 1);
            break;
        }
    }
}

push("Contenedor 1");
push("Contenedor 2");
push("Contenedor 3");
push("Contenedor 4");
console.log(arrayContenedores);
pop("Contenedor 2");
console.log(arrayContenedores);
