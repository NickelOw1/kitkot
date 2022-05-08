import React, {FC, useEffect, useState} from 'react';
import likeService from "../services/LikeService"

const LikeButton = (props: {videoId: string}) => {
  useEffect(() => {
    if (likes==-1) {
        getLikes()
    }

    
  })
    const [likes, setLikes] = useState(-1)
    const [likeBool, setLikeBool] = useState(0)
    const updateLike = async () => {
      if (likeBool==0) {
          setLikeBool(1)
          setLikes(likes + 1)
          await likeService.update(1, props.videoId)

      }
      if (likeBool==1) {
          setLikeBool(0)
          setLikes(likes - 1)
          await likeService.update(-1, props.videoId)

      }
  }
  const getLikes = async () => {
    const likesValue = (await likeService.getLikes(props.videoId)).data.value
    setLikes(likesValue)
    const likesBool = (await likeService.getLikes(props.videoId)).data.likeBool
    setLikeBool(likesBool)
  }
      return (
        <div>
            <h1>{likes}</h1>
            <button onClick={updateLike}>{likeBool}</button>
        </div>
      )
  
}


export default LikeButton
