import $api from "../http";

export default class UserService {
    static async update(value: number, videoId: string) {
        return $api.post('/updatelikes', {value, videoId})
    }

}

