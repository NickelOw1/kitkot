const likeService = require('../service/like-service');

class LikesController {
    async update(req, res, next) {
        try {
            if (req.body.value != 1 && req.body.value != -1) {
                throw new Error()
            }
            console.log(req.body.videoId)
            await likeService.updateLikes(req.body.value, req.body.videoId)
            console.log(req.body.value)
            return res.status(200)
        } catch (e) {
            next(e);
        }
    }

}


module.exports = new LikesController();
