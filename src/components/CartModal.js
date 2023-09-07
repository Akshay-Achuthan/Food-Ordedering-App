import React, { useContext } from "react";
import styles from "./CartModal.module.css";
import QuantityTotal from "../store/quantity-total";

const CartModal = (props) => {
  const ctx = useContext(QuantityTotal);
  let mapData = ctx.cartData;
  let cartLists;
  let totalAmount = 0;

  const increaseQuantity = (item) => {
    const updatedCartData = ctx.cartData.map((cartItem) => {
      if (cartItem.title === item.title) {
        cartItem.quantity += 1;
      }
      return cartItem;
    });
    ctx.cartAddedData(updatedCartData);
    ctx.handleQuantityChange(1);
  };

  const decreaseQuantity = (item) => {
    const updatedCartData = ctx.cartData.map((cartItem) => {
      if (cartItem.title === item.title && cartItem.quantity > 0) {
        cartItem.quantity -= 1;
      }
      return cartItem;
    }).filter((cartItem) => cartItem.quantity > 0); // Remove items with quantity 0
    ctx.cartAddedData(updatedCartData);
    ctx.handleQuantityChange(-1);
  };

  const orderHandler = () => {
    console.log("ordering...")
  }

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
            <button
              className={styles["list_button__styles"]}
              onClick={() => decreaseQuantity(item)}
            >
              -
            </button>
            <button
              className={styles["list_button__styles"]}
              onClick={() => increaseQuantity(item)}
            >
              +
            </button>
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
          <p className={styles['cart-total']}>
            <span>
            Total Amount
            </span> 
            <b>${totalAmount.toFixed(2)}</b>
            </p>
        </ul>
        <div className={styles['modal-button__styles']}>
          <button onClick={props.isClose}>Close</button>
          <button onClick={orderHandler}>Order</button>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
