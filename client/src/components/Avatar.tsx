import React, {FC} from 'react';

const Avatar = ({avatar}: {avatar: String}) => {
  return (
      <div>
        <img src={"https://storage.yandexcloud.net/kitkottesting/avatars/"+avatar}/>
      </div>
  )
}


export default Avatar
