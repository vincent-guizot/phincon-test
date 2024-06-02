const express = require('express');
const route = express.Router()
const Controller = require('../controllers/Controller')

route.get('/', Controller.home)
route.get('/catch', Controller.catch)
route.get('/release', Controller.release)
route.post('/rename', Controller.rename)

module.exports = route