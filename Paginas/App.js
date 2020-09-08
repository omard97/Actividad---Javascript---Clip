// function comienzo() {
//     let preguntas1 = ["¿Nombre del vocalista principal?","Participó de la banda Dead By Sunrise ","Nombre del Primer album","Grabo 7 álbumes","fue un músico, cantante, compositor y actor estadounidense"];

//     let preguntas2 = ["Cual fue el álbum debut de la banda","Fue publicado por Warner Bros. Records en el 2000","Fue un éxito comercial tras vender, a la fecha 30 millones de copias a nivel mundial.","El album tiene un nombre parecido a  "];
    
// }

// const respuesta = 

// let intentos = 4;

// function adivinanza() {

//     //var respuesta = getElementById("texto".toLowerCase()).value; //capturo el valor de la respuesta 

//     if (respuesta != "hybrid theory") //cuando es erroneo
//     {

//         document.getElementById("aviso").value = "Respuesta incorrecta, intentelo de nuevo";
//         if (document.getElementById("Numintentos").value == 3) {

//             document.getElementById("pregunta2").value = "El famoso album posee la canción In The End,";
//         }

//         document.getElementById("Numintentos").value = intentos - 1;
//     } if (respuesta == "hybrid theory") {

//     }
// }

// function validacion() {
//     if () {//(condicion que debe cumplir el primer campo del formulario) {
//       // Si no se cumple la condicion...
//       alert('[ERROR] El campo debe tener un valor de...');
//       return false;
//     }
//     else if ()  {//condicion que debe cumplir el segundo campo del formulario) {
//       // Si no se cumple la condicion...
//       alert('[ERROR] El campo debe tener un valor de...');
//       return false;
//     }
    
//     else if ()  {//condicion que debe cumplir el último campo del formulario) {
//       // Si no se cumple la condicion...
//       alert('[ERROR] El campo debe tener un valor de...');
//       return false;
//     }
  
//     // Si el script ha llegado a este punto, todas las condiciones
//     // se han cumplido, por lo que se devuelve el valor true
//     return true;
//   }

var resp = document.getElementById('respuesta')
var error = document.getElementById('error')
function adivinanza(){
    
    if(resp.value == "hola"){
        alert('acertaste...');
        return false;

    }else{
        alert('[ERROR] El campo debe tener un valor de...');
    return false;
    }



    
}