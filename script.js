// llamar variable que haga referencia al botton

var boton = document.querySelector(".general");

console.log(boton);

function emergencias (){
    alert("felicidades por tu perro")
    var jose = document.querySelector("#add-1")

    console.log(jose)

    var contenidoJOSE = jose.innerText
    console.log(contenidoJOSE)

    var joseconvertido = parseInt(contenidoJOSE)

    console.log(joseconvertido)

    var nuevoJOSE = joseconvertido + 1

    console.log(nuevoJOSE)

    jose.innerText=nuevoJOSE
};

boton.addEventListener("click", emergencias);

var boton2 = document.querySelector(".esqueleto");

console.log(boton2);

function emergencias2 (){
    alert("felicidades por tu gato")
    var jose2 = document.querySelector("#add-2")

    console.log(jose2)

    var contenidoJOSE2 = jose2.innerText
    console.log(contenidoJOSE2)

    var joseconvertido2 = parseInt(contenidoJOSE2)

    console.log(joseconvertido2)

    var nuevoJOSE2 = joseconvertido2 + 1

    console.log(nuevoJOSE2)

    jose2.innerText=nuevoJOSE2
};

boton2.addEventListener("click", emergencias2);

var boton3 = document.querySelector(".espadas");

console.log(boton3);

function emergencias3 (){
    alert("felicidades por tu pajaro")
    var jose3 = document.querySelector("#add-3")

    console.log(jose3)

    var contenidoJOSE3 = jose3.innerText
    console.log(contenidoJOSE3)

    var joseconvertido3 = parseInt(contenidoJOSE3)

    console.log(joseconvertido3)

    var nuevoJOSE3 = joseconvertido3 + 1

    console.log(nuevoJOSE3)

    jose3.innerText=nuevoJOSE3
};

boton3.addEventListener("click", emergencias3);


document.getElementById("seleccione una mascota").addEventListener("change", function() {
    elegiramigo(this.value);
});

function elegiramigo(mascota) {
    alert("¡Has elegido un " + mascota + "!");
}

document.getElementById("plata").addEventListener("click", function() {
this.remove()
});



// Variables
// var jose = document.querySelector("#add-1")

// console.log(jose)

// var contenidoJOSE = jose.innerText
// console.log(contenidoJOSE)

// var joseconvertido = parseInt(contenidoJOSE)

// console.log(joseconvertido)



// funciones

// Usar las funciones