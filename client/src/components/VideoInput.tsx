import React, {FC, useContext} from 'react';
import FileService from "../services/FileService";

const VideoInput: FC = () => {
  return (
      <div>
        <input name="videoupload" type="file" id="file"/>
        <button type="submit" onClick={FileService.submitVideo}>Подтвердить</button>
      </div>
  )
}


export default VideoInput
