
// alert('¿BUSCA UN INGENIERO DE MONTES? \n ¿UN TECNICO DE PREVENCIÓN DE RIESGOS LABOLARES? \n QUIZAS, ¿UN ANALISTA DE INCENDIOS FORESTALES? \n  O ¿ANLISTA GIS? \n\n ¡NO BUSQUE MÁS! \n AQUI ENCONTRARÁ LO QUE BUSCA.');


const preguntaInicio = {
    respuesta: prompt('¿BUSCA UN INGENIERO DE MONTES? \n ¿UN TECNICO DE PREVENCIÓN DE RIESGOS LABOLARES? \n QUIZAS, ¿UN ANALISTA DE INCENDIOS FORESTALES? \n  O ¿ANLISTA GIS? \n', 'SI / NO'),
};

console.log(preguntaInicio)

if (preguntaInicio.respuesta == 'SI') {
    alert('¡NO BUSQUE MÁS! \n AQUI ENCONTRARÁ LO QUE BUSCA.');
} 
else {
    alert ('Bueno... ojee lo que viene a continuación... \n ¡SEGURO QUE CAMBIA DE OPINIÓN!');
}

/*

function myFunction() {
    var x = document.getElementsByTagName('button');
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.backgroundColor = "rgb(240, 161, 71)";
    }
}
*/



var colorBoton0 = document.getElementsByTagName('button')[0];
colorBoton0.addEventListener("click", colorPulsar0);
function colorPulsar0() {
    colorBoton0.style.background = "rgb(240, 161, 71)";
};

var colorBoton1 = document.getElementsByTagName('button')[1];
colorBoton1.addEventListener("click", colorPulsar1);
function colorPulsar1() {
    colorBoton1.style.background = "rgb(240, 161, 71)";
};

var colorBoton2 = document.getElementsByTagName('button')[2];
colorBoton2.addEventListener("click", colorPulsar2);
function colorPulsar2() {
    colorBoton2.style.background = "rgb(240, 161, 71)";
};

var colorBoton3 = document.getElementsByTagName('button')[3];
colorBoton3.addEventListener("click", colorPulsar3);
function colorPulsar3() {
    colorBoton3.style.background = "rgb(240, 161, 71)";
};

var colorBoton4 = document.getElementsByTagName('button')[4];
colorBoton4.addEventListener("click", colorPulsar4);
function colorPulsar4() {
    colorBoton4.style.background = "rgb(240, 161, 71)";
};

var colorBoton5 = document.getElementsByTagName('button')[5];
colorBoton5.addEventListener("click", colorPulsar5);
function colorPulsar5() {
    colorBoton5.style.background = "rgb(240, 161, 71)";
};

var colorBoton6 = document.getElementsByTagName('button')[6];
colorBoton6.addEventListener("click", colorPulsar6);
function colorPulsar6() {
    colorBoton6.style.background = "rgb(240, 161, 71)";
};

var colorBoton7 = document.getElementsByTagName('button')[7];
colorBoton7.addEventListener("click", colorPulsar7);
function colorPulsar7() {
    colorBoton7.style.background = "rgb(240, 161, 71)";
};

var colorBoton8 = document.getElementsByTagName('button')[8];
colorBoton8.addEventListener("click", colorPulsar8);
function colorPulsar8() {
    colorBoton8.style.background = "rgb(240, 161, 71)";
};


/*

array1.forEach(element => console.log(element));

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
  document.getElementById("demo").innerHTML += index + ":" + item + "<br>"; 
}

*/

