import React, {FC, useEffect, useState} from 'react';
//const useParams = ReactRouterDOM.useParams;
import {useParams} from "react-router-dom"
import VideoService from "../services/VideoService";

const Profile: FC = () => {
  const params = useParams()
  const [videos, setVideos] = useState("")
  const fetchData = async () => {
    const videosData = await VideoService.getVideos(params.id)
    setVideos(videosData);
  };
  useEffect(() => {
    fetchData()
  });


  return (
      <div>
        <h1>{videos}</h1>
      </div>
  )
}


export default Profile
