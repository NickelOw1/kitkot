const likeService = require('../service/like-service');

class LikesController {
    async update(req, res, next) {
        try {
            const {refreshToken} = req.cookies
            if (req.body.value != 1 && req.body.value != -1) {
                throw new Error()
            }
            await likeService.updateLikes(req.body.value, req.body.videoId, refreshToken)

            return res.status(200)
        } catch (e) {
            next(e);
        }
    }

    async getLikes(req, res, next) {
        const videoData = await likeService.getLikes(req.query.videoId)
        return res.status(200).json({value: videoData.likes, likeBool: videoData.likeBool})
    }

}


module.exports = new LikesController();
