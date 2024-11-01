const mongoose = require("mongoose")

const signupSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: false
    },
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
    dob: {
        type: String,
        required: false
    },
    profile: {
        type: String,
        required: false
    },
})
signupModel = mongoose.model("signupModel", signupSchema)
module.exports = signupModel
