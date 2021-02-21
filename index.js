//Siguiendo la sintaxis de ES6 importamos express.
const express = require('express');
const app = express();
const port = 3000; //Declaramos el puerto en donde queremos levantar nuestra API


// Respondemos con un "Hola mundo" cuando se recibe una petición GET en nla pagina de inicio.
app.get('/', (req, res)=>{
    try {
        res.send('Hola mundo');
    } catch (error) {
        res.send(error);
    }
})


app.post('/', (req,res)=> {
    try {
        res.send('Respuesta para el inicio en una petición POST')
    } catch (error) {
        res.send(error)
    }
})

//Con .all() puedes recibir peticiones de cualquier tipo y siempre ejecutar el mismo callback.
app.all('/comodin',(req,res)=> {
    try {
        res.send('No importa qué método se use, este endpoint siempre responderá');
    } catch (error) {
        res.send(error)
    }
})

/* A diferencia del direccionamiento .all() con .route() puedes tener un callback 
 * distinto por cada tipo de peticón hacia la misma ruta. Ejemplo:
 */
app.route('/carro')
    .get((req, res) => {
        res.send('Obteniendo cualquier coche')
    })
    .post((req,res) =>{
        res.send('Añadiendo un coche')
    })
    .put((req,res) => {
        res.send('Actualizando un coche')
    })

//Iniciamos el servidor con la variable que establecimos en la línea 4 como nuestro puerto de entrada
//Solo es necesario ejecutar node index.js (o el nombre de tu archivo de origen)
app.listen(port, () => {
    console.log(`Servidor levantado en http://localhost:${port}`);
})