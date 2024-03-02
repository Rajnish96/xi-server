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
                // Regular expression to validate email format
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
        required: [true, 'stree 1 is required.']
    },
    r_street_2: {
        type: String,
        required: [true, 'street 2 is required.']
    },
    // city: {
    //     type: String,
    //     required: [true, 'City is required.']
    // },
    // gender: {
    //     type: String,
    //     enum: {
    //         values: ['Male', 'Female', 'Other'],
    //         message: 'Invalid gender.'
    //     },
    //     required: [true, 'Gender is required.']
    // },
    // age: {
    //     type: Number,
    //     required: [true, 'Age is required.'],
    //     min: [14, 'Age must be at least 14.']
    // }
});

// Create a model using the schema
const User = mongoose.model('User', usersSchema);

module.exports = User;
