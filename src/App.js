import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>ENC Survey Form</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/login">Login</Link> |{" "}
        <Link to="/mypage">Mypage</Link>
      </nav>
      <Link to="/manual">도움말 및 메뉴얼</Link>
      <br/>
      <Link to="/notice">공지사항</Link>
      <br/>
      <Link to="/servicecenter">고객센터</Link>
      <br/>
      <Link to="/faq">FAQ</Link>
    </div>
  );
}

export default App;
