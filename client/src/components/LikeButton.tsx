import React, {FC, useEffect, useState} from 'react';
import likeService from "../services/LikeService"

const LikeButton = (props: {videoId: string}) => {
  const [like, setLike] = useState(0)
  const updateLike = async () => {
      if (like==0) {
          setLike(1)
          likeService.update(1, props.videoId)
      }
      if (like==1) {
          setLike(0)
          likeService.update(-1, props.videoId)
      }
  }

  if (like==0) {
      return (
        <div>
            <button onClick={updateLike}>Like</button>
        </div>
      )
  }

      return (
        <div>
            <button onClick={updateLike}>Dislike</button>
        </div>
      )
  
}


export default LikeButton
