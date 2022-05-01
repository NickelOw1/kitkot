import React, {FC} from 'react';
import FileService from "../services/FileService";

const Settings: FC = () => {
  return (
      <div>
        <h1>Settings page</h1>
        Change avatar
        <input name="avatarupload" type="file" id="avatarfile"/>
        <button type="submit" onClick={FileService.submitAvatar}>Подтвердить</button>
      </div>
  )
}


export default Settings