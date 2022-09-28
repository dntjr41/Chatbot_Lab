import '../css/ServicePage.css'

// 고객 센터 페이지
// └헤더

const ServicePage = function () {
    return (
        <div className="servicePage">
            <button type="button" className="logoBtn">logo</button>
            <a href="/login" className="loginBtn_home">login</a>
            <a href="/myInfo" className="myBtn_home">my</a>
            <a href="/home" className="homeBtn">home</a>
             
            <h3>고객 센터</h3>

        </div>
    )
}

export default ServicePage;