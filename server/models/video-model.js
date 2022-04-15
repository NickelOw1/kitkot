const {Schema, model} = require('mongoose');

const VideoSchema = new Schema({
    name: {type: String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    likes: {type: Number, required: true},
})

module.exports = model('Video', VideoSchema);
