import styles from "./MenuItem.module.css"

const MenuItem = (props) => {
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
            <input type="number"/>
          </div> 
          <button className={styles['list-styles__button']}>Add +</button>
        </div>
      </li>
    </ul>
  );
}

export default MenuItem;