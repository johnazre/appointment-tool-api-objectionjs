const express = require('express')
const router = express.Router()
const User = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  User.query()
    .eager('appointments')
    .then(result => res.send(result))
})

router.get('/:id', function(req, res, next) {
  User.query()
    .findById(req.params.id)
    .eager('appointments')
    .then(result => res.send(result))
})

router.post('/', function(req, res) {
  User.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.patch('/:id', function(req, res) {
  User.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*')
    .then(updatedUser => res.json(updatedUser))
})

router.delete('/:id', function(req, res) {
  User.query()
    .deleteById(req.params.id)
    .returning('*')
    .then(deletedUser => res.json(deletedUser))
})

module.exports = router
