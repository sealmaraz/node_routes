const express = require('express'); //llamamos al servidor
const router = express.Router(); // Habilitamos las rutas

router.get('/',(req, res)=> res.send('Esta es la vista de Home')); //ruta con mensaje estático
router.get('/item',(req, res)=> res.send('Esta es la vista de item')); //ruta con mensaje estático


module.exports = router; //se exporta las rutas para qeu puedan ser accedidas desde app.js