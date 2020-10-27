const express = require('express');
const router = express.Router();
const conn = require('../inc/db');
const reservations = require('./../inc/reservations');
const menus = require('../inc/menus');
const contacts = require('../inc/contacts');
const emails = require('../inc/emails');
const { save } = require('../inc/users');

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
  
  contacts.render(req, res);

});

router.post('/contacts', function(req, res, next) {
  
  if(!req.body.name) {
    contacts.render(req, res, "Digite o nome");

  } else if(!req.body.email) {
    contacts.render(req, res, "Digite o email");

  } else if(!req.body.message) {
    contacts.render(req, res, "Digite sua menssagem");
  } else {
    
    contacts.send(req.body).then( results => {
      req.body = {};

      contacts.render(req, res, null, "Menssagem enviada com sucesso!");

    }).catch( err => {
      contacts.render(req, res, err.message);

    });
  }

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
  reservations.render(req, res);

});

router.post('/reservations', function(req, res, next) {

  if(!req.body.name) {
    reservations.render(req, res, "Digite o nome");

  } else if(!req.body.email) {
    reservations.render(req, res, "Digite o email");

  } else if(!req.body.people) {
    reservations.render(req, res, "Informe o número de pessoas");

  } else if(!req.body.date) {
    reservations.render(req, res, "Informe a data");

  } else if(!req.body.time) {
    reservations.render(req, res, "Informe a hora");

  } else {

    reservations.save(req.body).then(results => {

      req.body = {};

      reservations.render(req, res, null, "Reserva realizada com sucesso !");

    }).catch(err => {
      reservations.render(req, res, err.message);
    });
  }

});

router.get('/services', function(req, res, next) {

  res.render('services', { 
    title: 'Serviços - Restaurante Saboroso !',
    background: 'images/img_bg_1.jpg',
    h1: 'É um prazer poder servir!'
    
  });

});

router.post('/subscribe', function(req, res, next) {

  emails.save(req).then(results => {
    res.send(results);

  }).catch(err => {
    res.send(err);

  });
  
});


module.exports = router;
