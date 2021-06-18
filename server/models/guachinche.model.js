const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    hour: { type: String },
    phone: { type: Number },
    delivery: { type: Boolean },
    images: { type: Array, default: undefined },
    createdDate: { type: Date, default: Date.now }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
    }
});

module.exports = mongoose.model('Guachinche', schema);