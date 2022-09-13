import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import styles from './Layout.module.css'

const Layout = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      
      <main>
        {props.children}
      </main>
      
      <Footer />
    </div>
  )
}

export default Layout