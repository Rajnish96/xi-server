const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: [true, 'First name is required.']
    },
    last_name: {
        type: String,
        required: [true, 'Last name is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.'],
        unique: true,
        validate: {
            validator: function (value) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email format.'
        }
    },
    date_of_birth: {
        type: String,
        required: [true, 'Date of birth is required.']
    },
    r_street_1: {
        type: String,
        required: [true, 'Residential stree 1 is required.']
    },
    r_street_2: {
        type: String,
        required: [true, 'Residential street 2 is required.']
    },
    per_street_1: {
        type: String,
        required: [true, 'Permanent stree 1 is required.']
    },
    per_street_2: {
        type: String,
        required: [true, 'Permanent street 2 is required.']
    },
   
});

const User = mongoose.model('User', usersSchema);

module.exports = User;
