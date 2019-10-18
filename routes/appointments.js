const express = require('express')
const router = express.Router()
const Appointment = require('../models/Appointment')

/* GET home page. */
router.get('/', function(req, res, next) {
  Appointment.query()
    .eager('users')
    .then(result => res.send(result))
})

router.get('/:id', function(req, res, next) {
  Appointment.query()
    .findById(req.params.id)
    .eager('users')
    .then(result => res.send(result))
})

router.post('/', function(req, res) {
  Appointment.query()
    .insert(req.body)
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

router.patch('/:id', function(req, res) {
  Appointment.query()
    .findById(req.params.id)
    .patch(req.body)
    .returning('*')
    .then(updatedAppointment => res.json(updatedAppointment))
})

router.delete('/:id', function(req, res) {
  Appointment.query()
    .deleteById(req.params.id)
    .returning('*')
    .then(deletedAppointment => res.json(deletedAppointment))
})

module.exports = router
