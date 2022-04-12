import React, {FC} from 'react';
import ThemeSwitcher from "./ThemeSwitcher"
import ProfileButton from "./ProfileButton"

const Profile: FC = () => {
  return (
      <div>
        <ThemeSwitcher/>
        <ProfileButton/>
      </div>
  )
}


export default Profile
