// function comienzo() {
//     let preguntas1 = ["¿Nombre del vocalista principal?","Participó de la banda Dead By Sunrise ","Nombre del Primer album","Grabo 7 álbumes","fue un músico, cantante, compositor y actor estadounidense"];

//     let preguntas2 = ["Cual fue el álbum debut de la banda","Fue publicado por Warner Bros. Records en el 2000","Fue un éxito comercial tras vender, a la fecha 30 millones de copias a nivel mundial.","El album tiene un nombre parecido a  "];

// }

//capturo los ID
let resp = document.getElementById('respuesta');
let error = document.getElementById('error');
let intentos = document.getElementById('numintentos');

//AVISOS
let aviso = document.getElementById("alerta");
let aviso2 = document.getElementById("alerta2"); //cuando ganaste
let aviso3 = document.getElementById("alerta3");//cuando ingresas datos en blanco
let aviso4 = document.getElementById("alerta4");//cuando perdes
//contador
let contador = intentos;
function adivinanza() {

    //Cuando responde sin escribir la palabra
    if (resp.value == '') {
        alert('El contenido de la respuesta esta vacio, por favor ingrese una palabra');
        $("#alerta3").show();

    } else {

        //Cuando hacierta a la adivinanza
        if (resp.value == 'hybrid theory') {

            alert('¡¡¡¡EXCELENTE acertaste a la adivinanza..!!!');
            $("#alerta2").show();

            //Cuando NO hacierta a la adivinanza
        } else if (resp.value != 'hybrid theory') {      // && intentos ==4) {

            //condiciones de los intentos
            if (contador.value == '4') {
                contador.value--;//3 oportunidades
                document.getElementById('numintentos').value = contador.value;


                //mensaje de alerta
                document.getElementById('alerta').textContent = '¡¡ADVERTENCIA!! Respuesta incorrecta!! te quedan 3 intentos';

                $("#alerta").show();//mostrar alerta
              
                // OcultarAlerta();//Fucion para ocultar alerta

            } else if (contador.value == 3) {
                contador.value--;//2 oportunidades
                document.getElementById('numintentos').value = contador.value;

                //pista
                document.getElementById('pista1').textContent = "Pista: Fue un éxito comercial tras vender, a la fecha 30 millones de copias a nivel mundial.";

                //mensaje de alerta
                document.getElementById('alerta').textContent = '¡¡ADVERTENCIA!! Respuesta incorrecta!! te quedan 2 intentos';

                $("#alerta").show();//mostrar alerta
                // OcultarAlerta();//Fucion para ocultar alerta



            } else if (contador.value == 2) {
                contador.value--;//1 oportunidad
                document.getElementById('numintentos').value = contador.value;
                alert('Respuesta incorrecta!! te quedan 1 intentos.');

                //pista
                document.getElementById('pista2').textContent = "Pista: Fue publicado por Warner Bros. Records en el 2000 y el 24 de octubre del 2020 se celebraran 20 años tras su exito.";

                //mensaje de alerta
                document.getElementById('alerta').textContent = '¡¡ADVERTENCIA!! Respuesta incorrecta!! te queda 1 intento';

                $("#alerta").show();//mostrar alerta
                // OcultarAlerta();//Fucion para ocultar alerta

            } else if (contador.value == 1) {
                contador.value--; //0 oportunidades
                document.getElementById('numintentos').value = contador.value;
                alert('PERDISTE');
                //AGREGAR PISTA
                document.getElementById('alerta4').textContent = '¡PERDISTE! Actualiza la pagina para volver a empezar y completar la adivinanza. La respuesta era hybrid theory ';
                $("#alerta").hide();
                $("#alerta4").show();
                

            }

        }
    }

    function OcultarAlerta() {
        window.setTimeout(function () {
            $("#alerta").fadeTo(1500, 0).slideDown(1000, function () {
                // $(this).remove();
            });
        }, 2000); //2 segundos y desaparece

    }


}