var express = require('express');
var router = express.Router();


let comidas = [{id:'1', nombre: 'Carpaccio fresco', descripcion:'Entrada Carpaccio de salmón con cítricos', precio: 'U$S 65.50', imagen: 'Carpaccio-de-salmon.jpg'}, 
                  {id: '2', nombre: 'Risotto de berenjena', descripcion:'Risotto de berenjena y queso de cabra', precio: 'U$S 47.00', imagen: 'Risotto-berenjena-queso-cabra.jpg'}, 
                  {id: '3', nombre: 'Mousse de arroz', descripcion:'Mousse de arroz con leche y aroma de azahar', precio: 'U$S 27.50', imagen: 'Mousse-de-arroz-con-leche.jpg'}, 
                  {id: '4', nombre: 'Espárragos blancos', descripcion:'Espárragos blancos con vinagreta de verduras y jamón ibérico', precio: 'U$S37.50', imagen: 'esparragos.png'}
                ]; 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {'comidas': comidas});
});
/* GET detalle*/ 
router.get('/detalle/:id', function(req, res) {
  let idComida = req.params.id;
  
  let comidaElegida = {}
  comidas.map(function(comida) {
    if(comida.id == idComida) {
      comidaElegida = comida;
    }
  });

  res.render('detalleMenu', {'comida': comidaElegida});
});

module.exports = router;
