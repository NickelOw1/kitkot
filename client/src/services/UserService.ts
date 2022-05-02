import $api from "../http";
import {AxiosResponse} from 'axios';
import {AuthResponse} from "../models/response/AuthResponse";

export default class UserService {
    static async changeNickname(nickname: string): Promise<void> {
        return $api.post('/updatenickname', {nickname})
    }

    static async getLink() {

    }
}

