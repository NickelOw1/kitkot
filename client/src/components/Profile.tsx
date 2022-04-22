import React, {FC, useEffect, useState} from 'react';
//const useParams = ReactRouterDOM.useParams;
import {useParams} from "react-router-dom"
import VideoService from "../services/VideoService";

const Profile: FC = () => {
  const params = useParams()
  const [videos, setVideos] = useState([])
  const fetchData = async () => {
    const videosData = await VideoService.getVideos(params.id)
    setVideos(videosData);
  };
  useEffect(() => {
    if (!videos[0]) {
      fetchData()
    }
  });


  return (
      <div>
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
