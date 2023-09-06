import React, {useState,useContext} from "react";
import QuantityTotal from "../store/quantity-total";
import styles from "./NavBar.module.css"
import CartModal from "./CartModal";

const NavBar = () => {
  const ctx = useContext(QuantityTotal);
  const [isModalOpen,setIsModalOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  }
  
  const modalClosed = () => {
    setIsModalOpen(false);
  }

  return (
      <nav className={styles['navbar']}>
        <h2 className={styles['navbar-heading']}>
          Food
          <span className={styles['navbar-heading__style']}>Panda</span>
        </h2>
        <button onClick={modalOpen} className={styles['navbar-button']}> 
          <span className={styles['navbar-button_icon']}>🛒</span>
          <p className={styles['navbar-button_text']}>Your Cart</p>
          <span className={styles['navbar-button__counter']}>{ctx.totalQuantity}</span>
        </button>
        <CartModal isOpen={isModalOpen} isClose={modalClosed} />
      </nav>
  );
}

export default NavBar;