import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import MainPage from "./components/MainPage"
import Profile from "./components/Profile"
import Settings from "./components/Settings"
import Video from "./components/Video"

const App: FC = () => {
    const {store} = useContext(Context);
    const [users, setUsers] = useState<IUser[]>([]);

//    useEffect(() => {
//        if (localStorage.getItem('token')) {
//            store.checkAuth()
//        }
//    }, [])

    return (
      <BrowserRouter>
        <Routes>
          <Route path="profile/:id" element={<Profile/>}/>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/videos/:id" element={<Video/>}/>
        </Routes>
      </BrowserRouter>
    );
};

export default observer(App);
