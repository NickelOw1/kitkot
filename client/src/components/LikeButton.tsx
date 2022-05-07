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
          await likeService.update(1, props.videoId)
          setLikes(likes + 1)
      }
      if (likeBool==1) {
          setLikeBool(0)
          await likeService.update(-1, props.videoId)
          setLikes(likes - 1)
      }
  }
  const getLikes = async () => {
    const likesValue = (await likeService.getLikes(props.videoId)).data.value
    setLikes(likesValue)
    const likesBool = (await likeService.getLikes(props.videoId)).data.likeBool
    setLikeBool(likesBool)
  }
  if (likeBool==0) {
      return (
        <div>
            <h1>{likes}</h1>
            <button onClick={updateLike}>Like</button>
        </div>
      )
  }

      return (
        <div>
            <h1>{likes}</h1>
            <button onClick={updateLike}>Dislike</button>
        </div>
      )
  
}


export default LikeButton
