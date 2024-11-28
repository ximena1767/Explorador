canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

//Define el ancho y alto de la imagen del explorador.
personaje_ancho=100;
personaje_alto=90;


background_image = "mars.jpg";

personaje_image = "rover.png";

personaje_x = 10;
personaje_y = 10;


//Crea la función "add()"
 
background_imgTag=new Image();              //Define la variable con una nueva imagen
background_imgTag.onload=uploadBackground;  // Define una función para cargar esta variable
background_imgTag.src=background_image;     // Carga la imagen

personaje_imgTag=new Image();                 //Define la variable con una nueva imagen
personaje_imgTag.onload=uploadpersonaje;      // Define una función para cargar esta variable
personaje_imgTag.src=personaje_image;        // Carga la imagen

//Crea una función "uploadBackground()".
function uploadBackground(){
ctx.drawImage(background_imgTag,0,0,canvas.width, canvas.height);  //Dibuja la imagen de fondo
}                        
                                         

//Crea una función "uploadrover()".
function uploadpersonaje(){
ctx.drawImage(personaje_imgTag, personaje_x, personaje_y, personaje_ancho, personaje_alto )  //Dibuja la imagen del explorador
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    //Escribe el codigo si keypressed es up (arriba). El valor ASCIII para "arriba" es 38.
    if(keyPressed=='38'){
        up()
    }   
    if(keyPressed=='40'){
        down()
    }
    if(keyPressed=='37'){
        left()
    }   
    if(keyPressed=='39'){
        right()
    }       


     //Escribe el codigo si keypressed es down (abajo). El valor ASCIII para "abajo" es 40.
        




    //Actividad adicional
    //Escribe el código para cuando las teclas derecha e izquierda sean presionadas. 
}

function up(){
if (personaje_y >=0){
    personaje_y = personaje_y  -10;
    uploadBackground();
    uploadpersonaje();
}
}
function down(){
    if (personaje_y  <=500){
        personaje_y = personaje_y  +10;
        uploadBackground();
    uploadpersonaje();
    }   
}
function right(){
    if (personaje_x  >=0){
        personaje_x= personaje_x +10;
        uploadBackground();
    uploadpersonaje();
    }   
}
function left(){
    if (personaje_x <=500){
        personaje_x= personaje_x -10;
        uploadBackground();
    uploadpersonaje();
    }   
}