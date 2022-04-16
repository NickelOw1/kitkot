import axios from "axios"
import {API_URL} from "../http";

export default class VideoService {
    static submitFile() {
      const formData = new FormData();
      const imagefile = document.querySelector('#file');
      if (imagefile.type == "") {
        alert("ok")
      }
      formData.append("file", imagefile.files[0]);
      axios.post(`${API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
})
    }
}
