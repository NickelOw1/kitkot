import React, {FC} from 'react';
import FileService from "../services/FileService";
import UserService from '../services/UserService';
const Settings: FC = () => {
  return (
      <div>
        <h1>Settings page</h1>
        Change nickname
        <input type="text"/>
        <button type="submit">Подтвердить</button>
        <button onClick={UserService.getLink}>Copy user URL</button>
        Change avatar
        <input name="avatarupload" type="file" id="avatarfile"/>
        <button type="submit" onClick={FileService.submitAvatar}>Подтвердить</button>
      </div>
  )
}


export default Settings