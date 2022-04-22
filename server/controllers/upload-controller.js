const path = require("path")
const easyYandexS3 = require("easy-yandex-s3");
const videoService = require('../service/video-service');
const userService = require('../service/user-service');
const TokenModel = require('../models/token-model');
const UserModel = require('../models/user-model');

class uploadController {

    async upload(req, res, next) {
      try {
        const file = req.files.file.data
        const {refreshToken} = req.cookies;
        await videoService.upload(refreshToken, file)
        return res.json({message: `Uploaded successfully`})
      } catch (e) {
        next(e)
      }

}

  async getVideos(req, res, next) {

    if (req.query.ID==0 || req.query.ID=="") {
      const {refreshToken} = req.cookies
      if (!refreshToken) {
        return res.status(404).json({message: ["User is not found"]})
      }
      const tokenData = await TokenModel.findOne({refreshToken: refreshToken})
      const userData = await UserModel.findById(tokenData.user)
      const videos = await videoService.find(userData.id)
      return res.status(200).json({message: videos})

    }
    const videos = await videoService.find(req.query.ID)
    return res.status(200).json({message: videos})
  }

}

module.exports = new uploadController()
