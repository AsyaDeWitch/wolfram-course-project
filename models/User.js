const { Schema, model } = require('mongoose')

const schema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    firstName: {
        type: String,
        required: false,
        unique: false
    },
    secondName: {
        type: String,
        required: false,
        unique: false
    },
    hashedPassword: {
        type: String,
        required: true
    },
})

module.exports = model('User', schema)