const mongoose = require('mongoose');

const documentsSchema = new mongoose.Schema({
    file_name: {
        type: String,
        required: [true, 'File Name is required.']
    },
    file_type: {
        type: String,
        required: [true, 'File Type is required.']
    },
    email: {
        type: String,
        required: [true, 'Email is required.']
    },
    document: {
        type: String,
        required: [true, 'Document is required.']
    }
});
const documentsArraySchema = new mongoose.Schema({
    documents: [documentsSchema]
});
const Documents = mongoose.model('documents', documentsArraySchema);

module.exports = Documents;
