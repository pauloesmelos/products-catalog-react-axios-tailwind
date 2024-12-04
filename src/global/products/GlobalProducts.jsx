import React from 'react';
import API from '../../api/API';
import useGetProducts from '../../hooks/useGetProducts/useGetProducts';

export const GlobalProducts = React.createContext();
export const GlobalProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const { data } = useGetProducts(API);

  const filterProducts = (type) => {
    if(type === "all") {
      setProducts(data);
    }
    else {
      const filter = data.filter((prod) =>  prod.nome === type);
      setProducts(filter);
    }
  }

  return (
    <GlobalProducts.Provider value={{ products, setProducts, product, setProduct, filterProducts }}>
      {children}
    </GlobalProducts.Provider>
  )
}

export default GlobalProducts;