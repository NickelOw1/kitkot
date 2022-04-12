import React, {FC} from 'react';
import Header from "./Header"

const MainPage: FC = () => {
  return (
      <div>
        <Header/>
        <h1>Main page</h1>
        <a href="profile">Profile</a>
      </div>
  )
}


export default MainPage
