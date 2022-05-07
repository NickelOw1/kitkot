const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String},
    videos: {type: Array},
    avatar: {type: String},
    subscriptions: {type: Array},
    nickname: {type: String, required: true},
    likedVideos: {type: Array, default: []}
})

module.exports = model('User', UserSchema);
