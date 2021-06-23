const express = require('express');
const router = express.Router();
const reservaService = require('./reserva.service');

router.post('/create', create);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function create(req, res, next) {
    reservaService.create(req.body)
        .then(() => res.json(req.body))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    reservaService.getAll()
        .then(reservas => res.json(reservas))
        .catch(err => next(err));
}

function getById(req, res, next) {
    reservaService.getById(req.params.id)
        .then(reserva => reserva ? res.json(reserva) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    reservaService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    reservaService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}