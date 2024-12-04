import React from 'react';
import API from '../../api/API';
import GlobalProducts from '../../global/products/GlobalProducts';
import useGetProducts from '../../hooks/useGetProducts/useGetProducts';
import CardProduct from './card/CardProduct';
import Loading from './loading/Loading';

const ProductsList = () => {
  const { data, isLoading } = useGetProducts(API);
  const { products, setProducts } = React.useContext(GlobalProducts);

  React.useEffect(() => {
    setProducts(data);
  }, [data]);

  if( isLoading || !products ) return <Loading />
  return (
    <section className="w-full pt-10">
      <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-10">
        {products.map((product, index) => (
            <CardProduct 
                key={index * Math.random()} 
                {...product}
            />
        ))}
      </div>
    </section>
  )
}

export default ProductsList;