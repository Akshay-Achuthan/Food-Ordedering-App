import Card from "../UI/Card"
import MenuItem from "./MenuItem"

const MenuData = [
  {title:"Dosa", descritpion:"Plani dosa  with chutney and sambar", price: 22.40},
  {title:"IDli", descritpion:"Idli  with chutney and sambar", price: 2.21},
  {title:"Momos", descritpion:"steamed balls with stuffed vegies", price: 1.66}
]

const MainMenu = () => {

  return (
    <Card>
      {
        MenuData.map((item,index) => (
          <MenuItem key={index} title={item.title} description={item.descritpion} price={item.price}/>
        ))
      }
    </Card>
  );
}

export default MainMenu;