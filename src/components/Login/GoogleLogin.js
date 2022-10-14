import React from "react";
import GoogleLogin from "@caranmegil/react-google-login";
import '../../css/LoginPage.css'

const clientID = "24659580305-e13lm2q7q3f43fn8dvmahnu92sjrft51.apps.googleusercontent.com";

const GoogleButton=({onSocial})=> {

    const onSuccess = async(response)=>{
        console.log(response);

        const {googleID, profileObj : {email, name}} = response;

        await onSocial({
            socialID: googleID,
            socialType: 'google',
            email,
            nickname:name
        });
    }

    const onFailure = (error) => {
        console.log(error);
    }

    return(
        <div className="googleLoginBtn">
            <GoogleLogin 
                clientId={clientID}
                buttonText="   Google 아이디로 로그인   "
                responseType={"id_token"}
                onSuccess={onSuccess}
                onFailure={onFailure}
                isSignedIn={true}  /> 
        </div>
    )
}

export default GoogleButton;