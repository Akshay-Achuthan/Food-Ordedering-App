import foodImg  from "../assets/food.jpg"
import styles from "../UI/TitleCard.module.css"

const TitleCard = () => {
  return (
     <div className={styles["image-card-container"]}>
      <img src={foodImg} alt="FoodImage" className={styles["background-image"]} />
      <div className={styles["card"]}>
        <h2>Low cost. High quality</h2>
          <p>
            choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home
          </p>
          <p>
          Come dine with us & experience an authentic meal in an intimate dining space. We look forward to serving you!
          </p>
      </div>
    </div>
  );
}

export default TitleCard;