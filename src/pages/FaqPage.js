import '../css/FaqPage.css'

// FAQ 페이지
// └헤더

const FaqPage = function () {
    return (
        <div className="faqPage">
            <button type="button" className="logoBtn">logo</button>
            <a href="/login" className="loginBtn">login</a>
            <a href="/myInfo" className="myBtn">my</a>
            <a href="/home" className="homeBtn">home</a>
             
            <h3>FAQ</h3>
        </div>
    )
}

export default FaqPage;