const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    email: String,
    group: String,
    text: String,
    color: String,
    position: {
        x: Number,
        y: Number
    }
});

module.exports = mongoose.model('Note', NoteSchema);
