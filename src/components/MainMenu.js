import Card from "../UI/Card"
import MenuItem from "./MenuItem"

const MenuData = [
  {
    title: "Momos",
    description: "Steamed balls with stuffed veggies",
    price: 1.66
  },
  {
    title: "Burger",
    description: "Delicious burger with cheese and fries",
    price: 5.99
  },
  {
    title: "Pizza",
    description: "Margherita pizza with fresh basil and mozzarella",
    price: 8.49
  },
  {
    title: "Pasta Carbonara",
    description: "Creamy pasta with bacon, eggs, and Parmesan cheese",
    price: 9.99
  },
  {
  title: "Salad Bowl",
  description: "Fresh mixed greens with a variety of vegetables and choice of dressing",
  price: 6.49
  },
  {
    title: "Chicken Tacos",
    description: "Grilled chicken tacos with salsa and guacamole",
    price: 7.25
  }
]

const MainMenu = () => {

  return (
    <Card>
      {
        MenuData.map((item,index) => (
          <MenuItem key={index} title={item.title} description={item.description} price={item.price}/>
        ))
      }
    </Card>
  );
}

export default MainMenu;