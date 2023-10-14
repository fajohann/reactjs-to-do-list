import styles from './Header.module.css'
import logo from '../assets/logo-rocket.svg'

export function Header() {
    return (
      <div className={styles.header}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt="Logo Foguete" />
            <span>to<span className={styles.do}>do</span></span>
          </div>            
      </div>        
    )
}