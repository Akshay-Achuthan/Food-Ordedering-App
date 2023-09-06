import QuantityTotal from "../store/quantity-total";
import styles from "./NavBar.module.css"
import React, {useContext} from "react";

const NavBar = () => {
  const ctx = useContext(QuantityTotal);

  return (
      <nav className={styles['navbar']}>
        <h2 className={styles['navbar-heading']}>
          Food
          <span className={styles['navbar-heading__style']}>Panda</span>
        </h2>
        <button className={styles['navbar-button']}> 
          <span className={styles['navbar-button_icon']}>🛒</span>
          <p className={styles['navbar-button_text']}>Your Cart</p>
          <span className={styles['navbar-button__counter']}>{ctx.totalQuantity}</span>
        </button>
      </nav>
  );
}

export default NavBar;