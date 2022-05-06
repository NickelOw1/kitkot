import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import FileService from "../services/FileService";
import Avatar from "./Avatar"
import LikeButton from './LikeButton';

const Video: FC = () => {
  const params = useParams()
  const [video, setVideo] = useState([])
  const [avatar, setAvatar] = useState("")
  const fetchData = async () => {
    const videoData = await FileService.getSingleVideo(params.id)
    setVideo(videoData.video)
    setAvatar(videoData.avatar)
  };
  useEffect(() => {
    if (!video[0]) {
      fetchData()
    }
  });


  return (
      <div>
            <Avatar avatar={avatar}/>
            <LikeButton videoId={params.id||""} />
            <video controls preload="auto" src={"https://storage.yandexcloud.net/kitkottesting/videos/"+video}/>

      </div>
  )
}


export default Video
