# JS28-Modulos
JS 28 - Modulos  Exportar e Importar funciones, heredar, Export default alias
* 1. Básicos de los Modulos en ES6
* Y puedes exportar o importar todo, variables, funciones, classes 
* Para hacer referencia a la misma carpeta ./ donde estamos actualmente
* VS Code al importar lo coloca en el from 
* export default debe ir fuera de la llaves
*  1) El Problema
 1) Esto nos puede llevar a variables que se mezclen con otras en especial si el código es mantenido por múltiples
 personas o también si decidimos implementar librerías...
 La solución es agrupar cada archivo en lo que se conoce como un IIFE (irse al otro archivo...)
 IIFE una función que se ejecuta inmediatamente
 IIFE hace que todo lo que este dentro de la función IIFE solo este ahí. No se mezclaran las variables con los otros archivos JS, como por ejemplo app.js y empresa.js
 * EXPORT DEFAULT
 Cada archivo puede tener múltiples exports, pero solo un export default, este export default puede tener un nombre o no...
 * Heredar una clase, que estamos exportando desde cliente heredarla en este archivo(empresa.js y apps.js)
 * Recordar importar sin dependencias sin webPack sin ningún bundeler se requiere la extension (.js)
