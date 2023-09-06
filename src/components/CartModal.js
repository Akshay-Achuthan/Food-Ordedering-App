import React, {useContext} from "react";
import styles from "./CartModal.module.css"
import QuantityTotal from "../store/quantity-total";

const CartModal = (props) => {
  const ctx = useContext(QuantityTotal);
  let mapData = ctx.cartData;
  console.log(mapData);
  let cartLists;
  let totalAmount = 0; 

  if (mapData.length > 0) {
    cartLists = mapData.map((item) => {
      const itemTotalPrice = item.price * item.quantity;
      totalAmount += itemTotalPrice;

      return (
        <li className={styles["cart-list__styles"]} key={item.title}>
          <div className={styles["list-styles__firstdiv"]}>
            <h3 className={styles["list-styles__title"]}>{item.title}</h3>
            <div className={styles["list-styles__wrapper"]}>
              <p className={styles["list-styles__price"]}>${item.price}</p>
              <p className={styles["list-styles__quantity"]}>x{item.quantity}</p>
            </div>
          </div>
          <div className={styles["list-styles__seconddiv"]}>
            <button className={styles["list_button__styles"]}>-</button>
            <button className={styles["list_button__styles"]}>+</button>
          </div>
        </li>
      );
    });
  } else {
    cartLists = <h3>No data found</h3>;
  }

  return (
    <div className={props.isOpen ? styles.modalOpen : styles.modalClosed}>
      <div className={styles.modalContent}>
        <ul className={styles["cart-list"]}>
          {cartLists}
          <p>Total Amount: ${totalAmount.toFixed(2)}</p>
        </ul>
        <button>Order</button>
        <button onClick={props.isClose}>Close</button>
      </div>
    </div>
  );
};

export default CartModal;