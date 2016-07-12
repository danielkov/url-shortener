var mongoose = require('mongoose');

var urlSchema = mongoose.Schema({
    url: {
        type: String,
        required: true,
        unique: true
    },
    short: {
        type: String,
        required: true,
        unique: true
    },
    created: {
        type: Date,
        required: true,
        default: Date.now()
    }
});

var Url = module.exports = mongoose.model('Url', urlSchema);
