import React from 'react';
export const GlobalCart = React.createContext();
export const GlobalCartProvider = ({ children }) => {
  const [countUniqueProductCart, setCountUniqueProductCart] = React.useState(0);
  const handleInputNumber = ({ target }) => {
    let value = (target.value > 0 ? target.value : 0);
    setCountUniqueProductCart(value);
  }
  const handleProductCart = (type) => { // sub, add
    let count = countUniqueProductCart;
    switch(type) {
      case "sub":
        countUniqueProductCart > 0 ? count-- : 0
      break;
      case "add":
        count++
      break;
    }
    setCountUniqueProductCart(count);
  }

  return (
    <GlobalCart.Provider value={{ countUniqueProductCart, setCountUniqueProductCart, handleProductCart, handleInputNumber }}>
      {children}
    </GlobalCart.Provider>
  )
}