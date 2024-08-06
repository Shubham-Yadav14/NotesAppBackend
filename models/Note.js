const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    group: String,
    text: String,
    color: String,
    position: {
        x: Number,
        y: Number
    }
});

module.exports = mongoose.model('Note', NoteSchema);
