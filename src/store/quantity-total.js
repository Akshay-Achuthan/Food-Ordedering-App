import React, {useState} from "react"

const QuantityTotal = React.createContext({
  totalQuantity: 0,
  handleQuantityChange: () => {}
});

export const QuantityTotalProvider = (props) => {

  const [totalQuantity, setTotalQuantity] = useState(0);

  const handleQuantityChange = (quantityChange) => {
    setTotalQuantity((prevTotal) => prevTotal + quantityChange);
  };

  return (
    <QuantityTotal.Provider value={{
      handleQuantityChange: handleQuantityChange,
      totalQuantity: totalQuantity
    }}>
      {props.children}
    </QuantityTotal.Provider>

  );
}

export default QuantityTotal;