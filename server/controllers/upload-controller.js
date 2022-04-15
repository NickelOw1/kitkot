const path = require("path")
const easyYandexS3 = require("easy-yandex-s3");

const s3 = new easyYandexS3({
    auth: {
        accessKeyId: process.env.KEY_ID,
        secretAccessKey: process.env.ACCESS_KEY,
    },
    Bucket: process.env.BUCKET_NAME,
    debug: true
});

class uploadController {

    async upload(req, res, next) {
      try {
        const upload = await s3.Upload({
          buffer: req.files.file.data
      }, "/videos/" );
      return res.json({message: `Success`})
      } catch (e) {
        console.log(e)
      }




} }

module.exports = new uploadController()
