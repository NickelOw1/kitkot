const VideoModel = require("../models/video-model")

class LikeService {

    async updateLikes(value, videoId) {
        const videoData = await VideoModel.findById(videoId)
        videoData.likes = videoData.likes + value
        await videoData.save()
    }
}

module.exports = new LikeService();
