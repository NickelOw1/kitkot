import $api from "../http";

export default class UserService {
    static async update(value: number, videoId: string) {
        return $api.post('/updatelikes', {value, videoId})
    }

    static async getLikes(videoId: string) {
        return $api.get('/getlikes', {
            params: {
                videoId
            }
        })
    }

}

