const path = require("path")
const easyYandexS3 = require("easy-yandex-s3");
const videoService = require('../service/video-service');
const userService = require('../service/user-service');

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

}

module.exports = new uploadController()
