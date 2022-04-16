const {Schema, model} = require('mongoose');

const VideoSchema = new Schema({
    name: {type: String, required: true},
    user: {type: String, required: true},
    likes: {type: Number},
    comments: {type: Array}
})

module.exports = model('Video', VideoSchema);
