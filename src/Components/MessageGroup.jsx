import Navigation from '../Components/NavigationLayout';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { collection, query, where, getDocs, serverTimestamp, onSnapshot, doc, updateDoc, Timestamp } from "firebase/firestore";
import Search from '../Components/Search';
import { db, storage } from '../firebase';
import { arrayUnion, arrayRemove } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useRef } from 'react';

//Bootstrap
import InputGroup from 'react-bootstrap/InputGroup';
import { useContext } from 'react';
import { ChatConext } from '../Context/ChatContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuid } from "uuid";
import { AuthConext } from '../Context/AuthContext';
import Image from 'react-bootstrap/Image'
import CryptoJS from 'crypto-js';

export const MessageGroup = ({ message }) => {
    const { currentUser } = useContext(AuthConext);
    const { data } = useContext(ChatConext);

    const descifrar = (texto) => {

        var bytes = CryptoJS.AES.decrypt(texto, "poi").toString(CryptoJS.enc.Latin1);
        
        if (bytes) {
            return bytes;
        } else {
            return texto;
        }


        //let decData = CryptoJS.enc.Base64.parse(texto).toString(CryptoJS.enc.Utf8);
        //let bytes = CryptoJS.AES.decrypt(decData, "poi").toString(CryptoJS.enc.Utf8);
        //
        //if (bytes) {
        //    return JSON.parse(bytes);
        //} else {
        //    return texto;
        //}

       //const decrypted = CryptoJS.AES.decrypt(texto);
       //if (decrypted) {
       //    try {
       //        console.log(decrypted);
       //        const str = decrypted.toString(CryptoJS.enc.Utf8, 'secret');
       //        if (str.length > 0) {
       //            return str;
       //        } else {
       //            return 'error 1';
       //        } 
       //    } catch (e) {
       //        return 'error 2';
       //    }
       //}
       //return 'error 3';
    }


    const ref = useRef();

    useEffect(() => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    }, [message]);

    return (
        
        <ListGroup.Item>
            
            <Stack direction="horizontal" gap={3}>
                <Card.Img variant="left" src={message.photoURL} className="rounded-circle img" width={32}
                    height={30} />
                <div className="fw-bold">{message.displayName}</div>
                
            </Stack>
            
            <div className="ms-5 me-auto ml-5">
            
                {message.text && descifrar(message.text)}
                {message.img && <img src={message.img} alt="" width="100px" className='fluid' />}
            </div>
        </ListGroup.Item>
    );
};

export default MessageGroup