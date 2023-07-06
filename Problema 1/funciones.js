let miArray = ["Manzana", "Cebolla", "Apio", "Naranja", "Papaya","Sandía","Melón", 4];

function miFuncion(Manzana, Cebolla, Apio, Naranja, Papaya, Sandía, Melón, cantidad){
    miArray.splice(4, cantidad); //Se elimina los elementos del arreglo desde la posición 4 y
                                //la cantidad a elementos a eliminar desde esa posición

    return miArray;
}

console.log(miFuncion(...miArray));