import axios from "axios"
import {API_URL} from "../http";
import $api from "../http";

export default class VideoService {
    static submitFile() {
      const formData = new FormData();
      const imagefile = document.querySelector('#file');
      formData.append("file", imagefile.files[0]);
      $api.post(`${API_URL}/upload`, formData, {
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
        console.log(videoData.data.message) //text
        return (videoData.data.message)
    }
}
