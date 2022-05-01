const nodemailer = require('nodemailer');
const uuid = require('uuid');
const VideoModel = require('../models/video-model');
const easyYandexS3 = require("easy-yandex-s3");
const TokenModel = require('../models/token-model');
const UserModel = require('../models/user-model');

const s3 = new easyYandexS3({
    auth: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.ACCESS_KEY,
    },
    Bucket: process.env.BUCKET_NAME,
    debug: true
});

class VideoService {
  async upload(refreshToken, file) {
    const videoName = uuid.v4() + ".mp4"
    const upload = await s3.Upload({
      buffer: file,
      name: videoName
  }, "/videos/" );
    const tokenData = await TokenModel.findOne({refreshToken: refreshToken})
    const video = await VideoModel.create({name: videoName, user: tokenData.user, likes: 0, comments: []})
    const newVideoData = await VideoModel.findOne({name: videoName})
    const newVideoName = newVideoData.name
    const userData = await UserModel.findById(tokenData.user)
    await userData.videos.push(newVideoName)
    await userData.save()
    console.log(userData.videos)
    return video
  }

  async uploadAvatar(refreshToken, file) {
    const avatarName = uuid.v4()
    const upload = await s3.Upload({
      buffer: file,
      name: avatarName
  }, "/avatars/" );
    const tokenData = await TokenModel.findOne({refreshToken: refreshToken})
    const userData = await UserModel.findById(tokenData.user)
    userData.avatar = avatarName
    await userData.save()
    console.log(userData.videos)
  }

  async find(id) {
    const user = await UserModel.findById(id)
    return user.videos
  }
}

module.exports = new VideoService();
