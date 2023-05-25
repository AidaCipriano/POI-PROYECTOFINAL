import React, { useContext } from "react";
import Cam from "../img/cam.png";
import Add from "../img/add.png";
import More from "../img/more.png";
import Messages from "./MessagesT";
import Input from "./InputT";
import { ChatConext } from "../Context/ChatContext";
import "../stilos.scss";
import { collection, query, where, getDocs, serverTimestamp, onSnapshot, doc, updateDoc, Timestamp } from "firebase/firestore";
import { arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from '../firebase';

//Bootstrap
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuid } from "uuid";
import { AuthConext } from '../Context/AuthContext';
import CryptoJS from 'crypto-js';

const Chat = () => {

  const { data } = useContext(ChatConext);
  
  return (
    <div className="chatT">
      <div className="chatInfoT">
        <span>{data.user?.displayName}</span>
        <div className="chatIconsT">
          <img src={Cam} alt="" />
          <img src={Add} alt="" />
          <img src={More} alt="" />
        </div>
      </div>
      
      <Messages />
      {/* <Input/> */}
    </div>
  );
};

export default Chat;
