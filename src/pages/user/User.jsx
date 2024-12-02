import React from 'react';
import Helmet from '../../helmet/Helmet';

const User = () => {
  
  return (
    <div>
      <Helmet
        title={`Items - User`} 
        description={"Page user, query with ID, Buyed with React, Axios, React Query and Tailwind"} 
        keywords={"user, page user, query, React, Axios, React Query, Tailwind"}
      />
    </div>
  )
}

export default User;