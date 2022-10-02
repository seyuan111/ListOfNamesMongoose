const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    college: {
        type: String,
    },
    occupation: {
        type: String,
        required: true
    },
    company: {
        type: String,
    },
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb