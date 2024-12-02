import React from 'react';

export const GlobalProducts = React.createContext();
export const GlobalProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  
  return (
    <GlobalProducts.Provider value={{ products, setProducts, product, setProduct }}>
      {children}
    </GlobalProducts.Provider>
  )
}

export default GlobalProducts;