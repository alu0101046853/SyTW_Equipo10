const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: { type: String },
    hour: { type: String },
    phone: { type: String },
    delivery: { type: Boolean },
    image: { type: String, default: undefined },
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