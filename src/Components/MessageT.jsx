import React, { useContext, useEffect, useRef } from "react";
import { AuthConext } from "../Context/AuthContext";
import { ChatConext } from "../Context/ChatContext";
import "../stilos.scss";
import CryptoJS from 'crypto-js';

const Message = ({ message }) => {
  const { currentUser } = useContext(AuthConext);
  const { data } = useContext(ChatConext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const descifrar = (texto) => {
    var bytes = CryptoJS.AES.decrypt(texto, "poi");
    var textoDescifrado = bytes.toString(CryptoJS.enc.Latin1);

    if (textoDescifrado) {
        return textoDescifrado;
    } else {
        return texto;
    }
  }

  return (
    <div
      ref={ref}
      className={`messageT ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfoT">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContentT">
        <p>{message.text}</p>
       
        {message.img && <img src={message.img} alt="" width="100px" className='fluid' />}
      </div>
    </div>
  );
};

export default Message;
