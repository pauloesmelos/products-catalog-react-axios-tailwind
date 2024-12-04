import React from 'react';
import API from '../../api/API';
import useGetProducts from '../../hooks/useGetProducts/useGetProducts';

export const GlobalProducts = React.createContext();
export const GlobalProductsProvider = ({ children }) => {
  const [products, setProducts] = React.useState([]);
  const [product, setProduct] = React.useState([]);
  const { data } = useGetProducts(API);
  
  const filterMatch = (text) => {
    const filter = data.map((item) => {
      if(item.nome.toLowerCase().match(text.toLowerCase())) {
        return item;
      }
    }).filter((item) => item !== undefined);
    setProducts(filter);
  }
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
    <GlobalProducts.Provider value={{ products, setProducts, product, setProduct, filterProducts, filterMatch }}>
      {children}
    </GlobalProducts.Provider>
  )
}

export default GlobalProducts;