import React, {FC} from 'react';
import Header from "./Header"
import VideoInput from "./VideoInput"

const MainPage: FC = () => {
  return (
      <div>
        <Header/>
        <h1>Main page</h1>
        <VideoInput/>
        <a href="profile/0">Profile</a>
      </div>
  )
}


export default MainPage
