import React, {FC, useEffect, useState} from 'react';
import {useParams} from "react-router-dom"
import FileService from "../services/FileService";
import SettingsButton from "./SettingsButton"
import Avatar from "./Avatar"
import VideoInput from './VideoInput';

const Profile: FC = () => {
  const params = useParams()
  const [videos, setVideos] = useState([])
  const fetchData = async () => {
    const videosData = await FileService.getVideos(params.id)
    setVideos(videosData);
  };
  useEffect(() => {
    if (!videos[0]) {
      fetchData()
    }
  });


  return (
      <div>
        <SettingsButton/>
        <Avatar/>
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
