import React from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import Products from '../../components/products/Products';
import Helmet from '../../helmet/Helmet';

const Home = () => {
  return (
    <div>
      <Helmet 
        title={"Items - Home"} 
        description={"Homepage products catalog, buyed with React, Axios, React Query and Tailwind"} 
        keywords={"Homepage, Products, React, Axios, React Query, Tailwind"}
      />
      <Navbar />
      <Products />
      <Footer />
    </div>
  )
}

export default Home;