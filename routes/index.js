const express = require('express');
const router = express.Router();

const conn = require('./../database/db');
const menus = require('./../database/menus');

/* GET home page. */
router.get('/', function(req, res, next) {

  menus.getMenus().then(results => {

    res.render('index', { 
      title: 'Restaurante Saboroso !',
      menus: results,
      isHome: true 
    });

  });
  
});

router.get('/contacts', function(req, res, next) {
  
  res.render('contacts', { 
    title: 'Contato - Restaurante Saboroso !',
    background: 'images/img_bg_3.jpg',
    h1: 'Diga um oi!'    
  });

});

router.get('/menus', function(req, res, next) {

  menus.getMenus().then(results => {

    res.render('menus', { 
      title: 'Menu - Restaurante Saboroso !',
      menus: results, 
      background: 'images/img_bg_1.jpg',
      h1: 'Saboreie nosso menu!'
    });

  });
   
});

router.get('/reservations', function(req, res, next) {

  res.render('reservations', { 
    title: 'Reservas - Restaurante Saboroso !',
    background: 'images/img_bg_2.jpg',
    h1: 'Reserve uma Mesa!'
  });

});

router.get('/services', function(req, res, next) {

  res.render('services', { 
    title: 'Serviços - Restaurante Saboroso !',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'
    
  });

});

module.exports = router;
