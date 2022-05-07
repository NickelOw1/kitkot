const userModel = require("../models/user-model")
const VideoModel = require("../models/video-model")

class LikeService {

    async updateLikes(value, videoId) {
        const videoData = await VideoModel.findById(videoId)

        const userData = await userModel.findById(videoData.user)
        if (value===1 && userData.likedVideos.includes(videoId)) {
            throw new Error()
        }
        if (value===1) {
            userData.likedVideos.push(videoId)
            await userData.save()
            videoData.likes = videoData.likes + value
            await videoData.save()
        }
        if (value===-1) {
            const videoIndex = userData.likedVideos.indexOf(videoId)
            if (videoIndex!==-1) {
                userData.likedVideos.splice(videoIndex, 1)
                await userData.save()
                videoData.likes = videoData.likes + value
                await videoData.save()
            }

        }
    }
    async getLikes(videoId) {
        const videoData = await VideoModel.findById(videoId)
        const userData = await userModel.findById(videoData.user)
        const videoIndex = userData.likedVideos.indexOf(videoId)
        let likeBool = 0
        if (videoIndex!==-1) {
            likeBool = likeBool +1
        }
        return ({likes: videoData.likes, likeBool: likeBool})
    }
}

module.exports = new LikeService();
