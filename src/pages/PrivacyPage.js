import '../css/PrivacyPage.css'

// 개인정보처리방침 페이지
// └헤더

const PrivacyPage = function () {
    return (
        <div className="privacyPage">
            <button type="button" className="logoBtn">logo</button>
            <a href="/login" className="loginBtn_home">login</a>
            <a href="/myInfo" className="myBtn_home">my</a>
            <a href="/home" className="homeBtn">home</a>
             
            <h3>개인정보처리방침</h3>
        </div>
    )
}

export default PrivacyPage;