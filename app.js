//configuración general

const express = require('express'); //se llama a express
const app = express(); // se genera un objeto de tipo express (servidor)
const path = require('path');
const mainRoutes = require('./src/routes/main.routes'); //llamamos al archivo de rutas

const PORT = 3005; //genero un puerto constante

//respuestas al usuario

app.set('view engine','ejs');
app.set('views', path.resolve(__dirname, '.src/views'));//resolve resuelve solo la ruta

app.use(express.static('public')); //midelware para direccionar a la carpeta public
 
app.use('/', mainRoutes); // midelware para acceder al archivo mainRoutes

app.listen(PORT,()=> console.log(`Corriendo app en http://localhost:${PORT}`)); //midelware para generar el puerto del servidor