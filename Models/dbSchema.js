const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fname: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    phonenumber: { type: String }
});


module.exports = {
    userSchema: mongoose.model('users', userSchema),
}
