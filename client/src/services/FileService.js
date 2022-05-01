import axios from "axios"
import {API_URL} from "../http";
import $api from "../http";

export default class FileService {
    static submitVideo() {
      const formData = new FormData();
      const videofile = document.querySelector('#file');
      formData.append("file", videofile.files[0]);
      $api.post(`${API_URL}/uploadvideo`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
})
    }
    static submitAvatar() {
      const formData = new FormData();
      const imagefile = document.querySelector('#avatarfile');
      formData.append("file", imagefile.files[0]);
      $api.post(`${API_URL}/uploadavatar`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
})
    }
      static async getVideos(id) {
        const videoData = await axios.get(`${API_URL}/getvideos`, {
          params: {
            ID: id
          }
        })
        return (videoData.data.message)
    }
}
