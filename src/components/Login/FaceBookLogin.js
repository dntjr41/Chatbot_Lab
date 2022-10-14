import React from "react";
import FacebookLogin from "@greatsumini/react-facebook-login";
import '../../css/LoginPage.css'

const Facebooklogin = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  const componentClicked = (data) => {
    console.warn(data);
  };

  return (
    <div className="facebookLoginBtn">
      <FacebookLogin 
        appId= {process.env.FACEBOOK_APP_ID}
        autoLoad={true}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
      />
    </div>
  );
};

export default Facebooklogin;