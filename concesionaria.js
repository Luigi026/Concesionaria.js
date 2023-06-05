/*
Primera semana de trabajo
María presenta al equipo un nuevo proyecto para una concesionaria de automóviles, 
cuya principal línea de negocios es la compra y venta de automóviles.
La concesionaria necesita construir una lista con todos los vehículos que tiene registrados.
Por cada vehículo necesita conocer la siguiente información:

1- Marca (Ford, Fiat, etc). (marca)
2- Modelo (Fiesta, Corolla, etc). (modelo)
3- Color (Azul, Rojo, etc). (color)
4- Año de fabricación. (año)
5- Cantidad de kilómetros recorridos. (km)
6- Precio final. (precio)
7- Cantidad de cuotas. (cuotas)
8- Patente. (patente)
9- Vendido: para indicar si el auto está o no vendido. (vendido)

María quiere saber con qué tipo de dato representarán a cada vehículo individual. 
Juan pensó en 3 opciones para el vehículo individual. ¿Podrías ayudarlo a elegir la correcta?
        **Un objeto literal con las propiedades de cada auto. **
    
Aclarado el diseño del sistema. María tiene mucha experiencia, es súper profesional y está un paso adelante nuestro, 
por eso ella escribió en forma anticipada los tests de nuestro código, para asegurarse que el mismo funcione bien. 
Además, le pidió algunas tareas a Juan, quien te pregunta cómo él va a poder acceder a los objetos literales que vas a crear si el trabaja en otro archivo.
        **Exportando el contenido de la variable mediante "module.exports" y requiriéndolo en los archivos que lo necesiten.**
*/
/*
En base a las definiciones técnicas tomadas con el equipo deberás declarar la variable autos. 
Esta debe contener los siguientes vehículos:

--> El primer auto es un Ferrari Formula 1, Azul, del 2019, con 200 kilómetros, cuyo precio es 15.000.000, disponible en 12 cuotas, con la patente APL123 que no está vendido.
--> El segundo auto es un Lamborghini Aventador rojo, del 2022, 0 kilómetros, cuyo precio es 50.000.000, disponible en 14 cuotas, con la patente JJK116 que no está vendido.
--> El tercer auto es un Porcshe 911 amarillo, del 2022, 0 kilómetros, cuyo precio es 150.000.000, disponible en 10 cuotas, con la patente JJK117 que no está vendido.
--> El cuarto auto es un Rolls Royce Phantom negro, del 2023, 110 kilómetros, cuyo precio es 100.000.000, disponible en 10 cuotas, con la patente JJK118 que no está vendido.
Cada auto debe tener los siguientes atributos: marca, modelo, precio, km, color, cuotas, anio, patente, vendido.
     **Ya lo creamos en nuestro archivo {...}autos.json
Luego de eso, deberemos exportar la variable con nuestro array

-A la semana, el proyecto avanza y María nos pide otro requerimiento, esta vez un poco más avanzado. 
-Nos comenta que la concesionaria ahora necesita poder buscar los automóviles por patente y venderlos. 
-Para esto, María nos encargó pensar la forma en que representaremos a la concesionaria.

          **Podríamos tener un objeto literal que represente a la concesionaria con los autos que creamos y 
            que esta tenga las funcionalidades de buscar por patente y marcar como vendido un auto.**
*/

/*          PRIMERA ETAPA : 

En esta primera etapa, necesitamos requerir tu módulo autos que se encuentra en la misma carpeta del archivo donde estás trabajando.

Además, necesitarás crear un objeto literal llamado concesionaria que contendrá todas las funcionalidades que el cliente solicita.

Por último, nuestro objeto literal debe tener un atributo llamado autos que contenga la lista de automóviles importada anteriormente.
*/

/*          SEGUNDA ETAPA : 

Ahora que la concesionaria tiene los autos, es posible crear la funcionalidad buscarAuto que reciba por parámetro la patente y 
devuelva el auto al cual le corresponde.
En caso de no encontrar el mismo, deberá retornar null.
*/

/*          TERCERA ETAPA : 

Ahora, María les pide que agreguen la funcionalidad de venderAuto que recibe la patente y, 
en caso de encontrar al automóvil, le asigna el estado de vendido.

¿Cómo lo resuelven?
*/

/*          CUARTA ETAPA : 

exerciseProgressIcon
Funcionalidad extra
La primera es poder contar, como concesionaria, con la habilidad de poder tener la lista de autos para la venta. 
A lo cual, María, cree que es una tarea sencilla que Juan y vos pueden encarar solos, usando la función autosParaLaVenta, 
aunque por las dudas ella les recuerda que no deberían de aparecer los autos que ya fueron vendidos.
*/

/**          QUINTA ETAPA : 
 * 
María, contenta con el trabajo que realizaron, les pide otra funcionalidad extra. 
Resulta que a la concesionaria le suelen preguntar muy seguido cuáles de los autos para la venta son 0 km. 
Tené en cuenta que María considera que un auto 0 km es aquel que tenga un kilometraje menor a 100. 
Vas a tener que desarrollar la funcionalidad autosNuevos.

¿Cómo podés resolver esto reutilizando la función autosParaLaVenta?
*/

/*          SEXTA ETAPA : 

El cliente le pidió saber cuánto dinero generaron las ventas.

María te pide que completes la función listaDeVentas que devuelve una lista que contiene el precio de venta de cada auto vendido. 
A esto, Juan, que está al lado tuyo, se le escapa la frase "mmm.....estoy seguro que alguna función de arrays nos va a servir, pero no me acuerdo".
*/

/*         SEPTIMA ETAPA : 

Terminada esta función, María te pide que resuelvas la funcionalidad de totalDeVentas, 
que justamente nos devuelva la sumatoria del valor de todas las ventas realizadas. 
Acá el único requerimiento técnico explícito es que utilices la función reduce, ¡a codear!
*/

/*              OCTAVA ETAPA :

Muy contento el equipo por cómo viene el desarrollo, por la tarde, María te comenta que se agrega una funcionalidad muy importante: 
la de verificar si una persona puede comprar o no un auto.
Esta permite al sistema definir si una persona al consultar por un auto, puede comprarlo. 
Las personas solo sacan los autos en cuotas y tomando dos factores como condición de compra. 
Una es el costo total: si el total de un auto excede lo que la persona considera caro, no va a comprar el auto. 
Otra condición es su capacidad de pago en cuotas: si la capacidad de pago en cuotas supera al costo de la cuota, va a poder pagarlo. 
Si ambas condiciones se cumplen, se realiza la compra.

Es por esto que María te pide que desarrolles la función puedeComprar que reciba por parámetro un auto y una persona y devuelva true si la misma puede comprar el auto.

Una persona va a ser representada mediante un objeto literal de la siguiente forma:

{
nombre: “Juan”,
capacidadDePagoEnCuotas: 200.000,
capacidadDePagoTotal: 100.00000
}
*/

/*                  NOVENA ETAPA : 

Ahora, te comprometiste a realizarla. Así que manos a la obra. 
Hay que escribir la función autosQuePuedeComprar, que recibe una persona y 
devuelve la lista de autos que puede comprar.

La función debe de realizar los siguientes pasos:

1) Obtener los autos para la venta

2) Por cada uno de los autos debe de probar si la persona puede comprarlo, ¿ya hay alguna funcionalidad que me permita hacer esto?.

3) Luego debemos retornar los que pueda comprar, ¿hay alguna manera de poder filtrar la lista de autos para la venta del punto 1 con el paso 2?
*/