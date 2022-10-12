function init() {
    return document.getElementById("todo").value
}

function agregar() {
    if (init() == "") {
        alert("el campo esta vacio")
    } else {
        texto = document.createTextNode(init())
        nodo = document.createElement("li")
        nodo.appendChild(texto)
        nodo.setAttribute("id", init())
        document.getElementById("lista").appendChild(nodo)
    }
}

function buscarPorId() {
    if (document.getElementById(init()) == null) {
        alert("no existe")
    } else {
        alert("si existe")
    }
}

function buscarForOf() {
    listaTodo = document.getElementsByTagName("li")
    let elmentos = [].slice.call(listaTodo)

    for (let i of elmentos) {
        if (i.textContent == init()) {
            alert("si esta")
        } else {
            alert("no esta pero se va agregar")
            agregar()
        }
    }
}

function buscarForEach() {
    listaTodo = document.getElementsByTagName("li")
    let elmentos = [].slice.call(listaTodo)

    elmentos.forEach(i => {
        if (i.textContent == init()) {
            alert("si esta")
        } else {
            alert("no esta pero se va agregar")
            agregar()
        }
        console.log(elmentos)
    });
}