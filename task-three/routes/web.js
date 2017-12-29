const route = require('express').Router();

const HomeController = require('./../app/Http/Controllers/HomeController');
const AuthController = require('./../app/Http/Controllers/AuthController');

route.get('/', HomeController.index);

// Auth routes (GET)
route.get('/auth/login', AuthController.getLogin);
route.get('/auth/logout', AuthController.getLogout);
route.get('/auth/register', AuthController.getRegister);

// Auth routes (POST)
route.post('/auth/login', AuthController.postLogin);
route.post('/auth/register', AuthController.postRegister);

module.exports = { route };
