import React from "react";
import { Box } from "@mui/material"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import idflogo from './idflogo.png';
import { useLoginContext } from "../../Providers/LoginProvider";

const Login = () => {
    const {setIsLogged} = useLoginContext();
    const [userInput, setUserInput] = useState("");
    const backgroundstyle = {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: "#2d383c",
        color: "#fff"
    };

    const boxstyle = {
        position: "relative",
        height: "40%",
        width: "25%",
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: "10px",
    }
    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', "width=500,height=600")
        if (newWindow) newWindow.opener = null
    }
    const navigate = useNavigate();
    const navigateHome = () => {
        if (userInput.length === 9) {
            const newWindow = window.open('https://login.microsoftonline.com/78820852-55fa-450b-908d-45c0d911e76b/oauth2/v2.0/authorize?client_id=7b202b0a-1a3c-4dc2-8432-a29ae04973d5&scope=User.Read openid profile offline_access&redirect_uri=https%3A%2F%2Flocalhost:5173/login%2F&client-request-id=4c817c41-daa9-4f28-a505-ac3e01191c94&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.24.0&client_info=1&code_challenge=WECDcOTRvljrLBkQ85tdtWVowCw0FD7Es_WleZ8s0gw&code_challenge_method=S256&login_hint=' + userInput.toString()+ '%40idf.il&X-AnchorMailbox=UPN%3A'+userInput.toString()+'%40idf.il&nonce=f14f5caa-22eb-47fd-a60a-22b431bda628&state=eyJpZCI6IjUwYjNiYTc3LTgxODQtNGFjZS04ZmJjLTY3OGFhNmY5YzQ1ZSIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicG9wdXAifX0%3D', '_blank', "width=500,height=600")
            var timer = setInterval(function () {
                if(newWindow.closed){
                    clearInterval(timer);
                    setIsLogged(true);
                    localStorage.setItem('LoginToken', true);
                    navigate("/home");

                }
            })
        } else {
            alert("תעודת זהות לא תקינה");
        }
    };


    const GetInputValue = (event) => {
        setUserInput(event.target.value);
    }

      return (
        <Box style={backgroundstyle}>
            <Box style={boxstyle} justifyContent="center">
                <img src={idflogo} style={{height: "10%", width: "7%", position: "absolute", top: "5%", left: "5%"}}/>
                <TextField id="standard-basic" label="תעודת זהות" variant="standard" sx={{
                    input: {
                        color: "#0784b5",
                        textAlign: "center",

                    }, label: {
                        right: 0
                    }
                }} onChange={GetInputValue} /><br/>
                <Button variant="contained" onClick={navigateHome}>היכנס</Button>
                    
            </Box>
        </Box>

    );
}

export default Login;