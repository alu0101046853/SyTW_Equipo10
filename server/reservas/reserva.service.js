const db = require('_helpers/db');
const Reserva = db.Reserva;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Reserva.find();
}

async function getById(id) {
    return await Reserva.find({usuario: id});
}

async function create(ReservaParam) {
    const reserva = new Reserva(ReservaParam);
    await reserva.save();
}

async function update(id, ReservaParam) {
    const reserva = await Reserva.findById(id);

    if (!reserva) throw 'Reserva not found';

    Object.assign(reserva, ReservaParam);
    await reserva.save();
}

async function _delete(id) {
    await Reserva.findByIdAndRemove(id);
}