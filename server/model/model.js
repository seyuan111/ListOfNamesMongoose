const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    college: {
        type: String,
    },
    occupation: {
        type: String,
    },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb