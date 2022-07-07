let cantidadAlumnos = parseInt (prompt("indica cuantos alumnos registras"));

let edadAlumnos ; //registro edades

let sumadorEdades = 0 ; //acumulador de edades

let n ; //ciclo

for(n=1 ;n <= cantidadAlumnos;n++){
    
    edadAlumnos = parseInt(prompt("ingresa la edad del alumno " + n ))
sumadorEdades = sumadorEdades + edadAlumnos;

}
let promedio = sumadorEdades/cantidadAlumnos

alert ("el promedio de las edades de los alumnos es"+ " " + promedio )