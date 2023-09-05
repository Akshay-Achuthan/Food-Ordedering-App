import styles from "./NavBar.module.css"

const NavBar = () => {
  return (
      <nav className={styles['navbar']}>
        <h2 className={styles['navbar-heading']}>
          Food
          <span className={styles['navbar-heading__style']}>Panda</span>
        </h2>
        <button className={styles['navbar-button']}> 
          <span className={styles['navbar-button_icon']}>🛒</span>
          <p className={styles['navbar-button_text']}>Your Cart</p>
          <span className={styles['navbar-button__counter']}>0</span>
        </button>
      </nav>
  );
}

export default NavBar;