import styles from './Header.module.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          ENC Survey Form 로고
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>
              로그인
           
            </li>
            <li>
              마이 페이지
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;