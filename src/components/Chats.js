import React , {useState , useEffect , useContext} from 'react';
import {auth} from '../../src/firebase';
import {useNavigate} from "react-router-dom";
import {ChatEngine} from "react-chat-engine";
import axios from 'axios';


import Navbar from "./Navbar";


import {AuthContext} from "../context/AuthContextProvider";

const Chats = () => {

    const [loading , setLoading] = useState(true);
    const user = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate('/');
            return;
        }

        axios.get("https://api.chatengine.io/users/me" , {
            headers:{
                "project-id":"0f70c0f7-74d0-4f11-86c7-a53dbeac72dc",
                "user-name":user.email,
                "user-secret":user.uid,
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append("email" , user.email);
                formdata.append("username" , user.email);
                formdata.append("secret" , user.uid);
                getFile(user.photoURL)
                    .then(avatar => {
                        formdata.append("avatar" , avatar , avatar.name)
                        axios.post('https://api.chatengine.io/users/' , formdata , {
                            headers: {
                                "private-key":"3e4f644c-e881-420e-9381-206572c4d91d",
                            }
                        })
                            .then(() => setLoading(false))
                            .catch(error => console.log(error))
                    })

            })

        const getFile = async (url) => {
            const response = await fetch(url);
            const data = await response.blob();
            console.log(new File([data] , "userPhoto.jpg" , {type:"image/jpeg"}))
            // return new File([data] , "userPhoto.jpg" , {type:"image/jpeg"})
        }

    } , [user , navigate])
    const logoutHandeler = async () => {
        await auth.signOut()
        navigate('/')
    }

    if (!user || loading) return "Loading...."

    return (
        <div>
            <Navbar logoutHandeler={logoutHandeler}/>
            <ChatEngine
                height="calc(100vh - 50px)"
                projectID="0f70c0f7-74d0-4f11-86c7-a53dbeac72dc"
                userName={user.email}
                userSecret={user.uid}

            />
        </div>
    );
};

export default Chats;