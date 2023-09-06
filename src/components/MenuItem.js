import React, {useState,useContext} from "react";
import styles from "./MenuItem.module.css"
import QuantityTotal from "../store/quantity-total";

const MenuItem = (props) => {
  const ctx = useContext(QuantityTotal);

  let [incrementNum,setIncrementNum] = useState(0);
 
  const addButtonHandler = () => {
    setIncrementNum((preVal) => {
      const convertedPreVal = Number(preVal);
      return convertedPreVal+1;
    })

    const addedData = {
      title: props.title,
      price: props.price,
      quantity: incrementNum+1
    };

    const updatedCartData = [...ctx.cartData, addedData];
    ctx.cartAddedData(updatedCartData);
    ctx.handleQuantityChange(1);
  }

  const inputHandler = (event) => {
    setIncrementNum(event.target.value);

    ctx.handleQuantityChange(Number(event.target.value));
  }

  return (
    <ul className={styles['list']}>
      <li className={styles['list-styles']}>
        <div className={styles['list-styles__firstdiv']}>
          <h3 className={styles['list-styles__title']}>{props.title}</h3>
          <p className={styles['list-styles__description']}>{props.description}</p>
          <p className={styles['list-styles__price']}>${props.price}</p>
        </div>
        <div className={styles['list-styles__seconddiv']}>
          <div className={styles['list-styles__quantity']}>
            <p>Quantity</p>
            <input onChange={inputHandler} value={incrementNum} type="number"/>
          </div> 
          <button onClick={addButtonHandler} className={styles['list-styles__button']}>Add +</button>
        </div>
      </li>
    </ul>
  );
}

export default MenuItem;