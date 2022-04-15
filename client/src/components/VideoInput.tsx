import React, {FC, useContext} from 'react';
import VideoService from "../services/VideoService";

const VideoInput: FC = () => {
  return (
      <div>
        <input name="videoupload" type="file" id="file"/>
        <button type="submit" onClick={VideoService.submitFile}>Подтвердить</button>
      </div>
  )
}


export default VideoInput
