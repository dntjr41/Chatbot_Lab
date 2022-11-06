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
    <div >
      <FacebookLogin className="facebookLoginBtn"
      style={{
        backgroundColor: '#4267b2',
        color: '#fff',
        fontSize: '0px',
        padding: '0px 0px',
        border: 'none',
        borderRadius: '0px',
      }}
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