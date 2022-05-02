import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import FileService from "../services/FileService";
import SettingsButton from "./SettingsButton"
import Avatar from "./Avatar"
import VideoInput from './VideoInput';

const Profile = () => {
  const params = useParams()
  const [videos, setVideos] = useState([])
  const [avatar, setAvatar] = useState("")
  const fetchData = async () => {
    const videosData = await FileService.getVideos(params.id)
    const avatarData = await FileService.getAvatar(params.id)
    console.log(avatarData)
    setVideos(videosData)
    setAvatar(avatarData)
  };
  useEffect(() => {
    if (!videos[0]) {
      fetchData()
    }
  });


  return (
      <div>
        <SettingsButton/>
        <Avatar avatar={avatar}/>
        <VideoInput/>
        {videos.map((video) => {
          const link = "https://storage.yandexcloud.net/kitkottesting/videos/" + video
          return (
            <video controls preload="auto" src={link}/>
          )
        })}
      </div>
  )
}


export default Profile
