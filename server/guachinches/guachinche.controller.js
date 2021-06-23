const express = require('express');
const router = express.Router();
const guachincheService = require('./guachinche.service');

router.post('/register', register);
router.get('/', getAll);
router.get('/:id', getById);
router.put('/:id', update);
router.delete('/:id', _delete);

module.exports = router;

function register(req, res, next) {
    guachincheService.create(req.body)
        .then(() => res.json(req.body))
        .catch(err => next(err));
}

function getAll(req, res, next) {
    guachincheService.getAll()
        .then(guachinches => res.json(guachinches))
        .catch(err => next(err));
}

function getById(req, res, next) {
    guachincheService.getById(req.params.id)
        .then(guachinche => guachinche ? res.json(guachinche) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    guachincheService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    guachincheService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}