import Card from "../UI/Card"
import MenuItem from "./MenuItem"

const MenuData = [
  {title:"Dosa", descritpion:"Plani dosa  with chutney and sambar", price: 22.40},
  {title:"Dosa", descritpion:"Plani dosa  with chutney and sambar", price: 2.21},
  {title:"Dosa", descritpion:"Plani dosa  with chutney and sambar", price: 1.66}
]

const MainMenu = () => {
  return (
    <Card>
      {
        MenuData.map((item) => (
          <MenuItem title={item.title} description={item.descritpion} price={item.price}/>
        ))
      }
    </Card>
  );
}

export default MainMenu;