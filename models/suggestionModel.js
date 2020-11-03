const mongoose = require('mongoose');

const suggestionSchema = new mongoose.Schema({
    title: {type: String, require: true, lowercase: true, unique: true},
    name: {type: String, require: true, lowercase: true},
    suggestion: {type: String, require: true, lowercase: true},
    likes: {type: Number, default: 0},
    anon: {type: Boolean},
    timeCreated: {type: Date}
});

module.exports = mongoose.model('suggestions', suggestionSchema);