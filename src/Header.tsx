import styles from './Header.module.css'
import logo from './assets/logo.svg'

export function Header() {
    return (
      <div className={styles.header}>
            <img className="logo" src={logo} />
      </div>        
    )
}