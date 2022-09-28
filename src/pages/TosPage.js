import '../css/TosPage.css'

// 이용약관 페이지
// └헤더

const TosPage = function () {
    
    return (
        <div className="tosPage">
            <button type="button" className="logoBtn" >logo</button>
            <a href="/login" className="loginBtn_home">login</a>
            <a href="/myInfo" className="myBtn_home">my</a>
            <a href="/home" className="homeBtn">home</a>

            <h3>이용약관</h3>
             
        </div>
    )
}

export default TosPage;