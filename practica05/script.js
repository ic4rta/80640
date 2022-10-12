let colores = ['red', 'yellow', 'blue', 'magenta', 'purple', 'cyan', 'green'];

function cambiarColor(color){
    console.log("El color recibido es: ", color);
    const elem = document.getElementsByClassName("texto");
    let elmentos = [].slice.call(elem);

    /*
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.color = colores[Math.floor(Math.random()*colores.length)];;
    } 
    
    elmentos.forEach(atrib => {
        atrib.style.color = colores[Math.floor(Math.random()*colores.length)];;
    });



    for(let i of elmentos){
        i.style.color = colores[Math.floor(Math.random()*colores.length)];;
    }

    */

    for (const x in elem){
        if (Object.hasOwnProperty.call(elem, x)){
            elem[x].style.color = colores[Math.floor(Math.random()*colores.length)];
        }
    }


    /*
    let x = 0
    for(let i in elmentos){
        if (0 < elmentos.length){
            elmentos[i].style.color = colores[Math.floor(Math.random()*colores.length)];
        }    
    }
    */
}

function cambiarColor2(color1, color2){
    console.log("El color recibido es: ", color1, color2);
    const elem = document.getElementsByClassName("texto");
    elem[0].style.color = color1;
    elem[1].style.color = color2;
}
