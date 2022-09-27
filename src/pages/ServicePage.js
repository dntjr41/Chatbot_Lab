import '../css/ServicePage.css'

// 고객 센터 페이지
// └헤더

const ServicePage = function () {
    return (
        <div className="servicePage">
            <button type="button" className="logoBtn">logo</button>
            <a href="/login" className="loginBtn">login</a>
            <a href="/myInfo" className="myBtn">my</a>
            <a href="/home" className="homeBtn">home</a>
             
            <h3>고객 센터</h3>

        </div>
    )
}

export default ServicePage;