const mongoose = require('mongoose');

const ProjetSchema = mongoose.model('projet', {
    titre: {
        type: String
    },
    date: {
        type: String
    },
    status: {
        type: Boolean,
        default: false
    }
});

module.exports = ProjetSchema;
