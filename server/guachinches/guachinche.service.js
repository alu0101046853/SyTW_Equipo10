const db = require('_helpers/db');
const Guachinche = db.Guachinche;

module.exports = {
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function getAll() {
    return await Guachinche.find();
}

async function getById(id) {
    return await Guachinche.findById(id);
}

async function create(guachincheParam) {

    if (await Guachinche.findOne({ name: guachincheParam.name })) {
        throw 'Name "' + guachincheParam.name + '" is already taken';
    }

    const guachinche = new Guachinche(guachincheParam);
    await guachinche.save();
}

async function update(id, guachincheParam) {
    const guachinche = await Guachinche.findById(id);

    if (!guachinche) throw 'User not found';

    Object.assign(guachinche, guachincheParam);
    await guachinche.save();
}

async function _delete(id) {
    await Guachinche.findByIdAndRemove(id);
}