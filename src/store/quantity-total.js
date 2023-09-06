import React, {useState} from "react"

const QuantityTotal = React.createContext({
  totalQuantity: 0,
  handleQuantityChange: () => {},
  cartData: [],
  cartAddedData: () => {}
});

export const QuantityTotalProvider = (props) => {

  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartData, setCartData] = useState([]);

  const handleQuantityChange = (quantityChange) => {
    setTotalQuantity((prevTotal) => prevTotal + quantityChange);
  };

  const updateCartData = (data) => {
    setCartData(data);
  };
  
  return (
    <QuantityTotal.Provider value={{
      handleQuantityChange: handleQuantityChange,
      totalQuantity: totalQuantity,
      cartData: cartData,
      cartAddedData: updateCartData 
    }}>
      {props.children}
    </QuantityTotal.Provider>

  );
}

export default QuantityTotal;