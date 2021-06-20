const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    usuario: { type: String, required: true },
    guachinche: { type: String, required: true },
    name: { type: String },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    comensales: { type: Number },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Reserva', schema);