import React from 'react';
import { default as Helmet, default as useHelmet } from '../../helmet/Helmet';

const Saves = () => {
  useHelmet("Items - Saves", "Your products saves, buyed with react, axios, react query and tailwind", "products, save");
  return (
    <div>
      <Helmet
        title={"Items - Saves"} 
        description={"Page products saves"} 
        keywords={"page, products, saves"}
      />
    </div>
  )
}

export default Saves;