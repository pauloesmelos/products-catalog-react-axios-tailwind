import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from '../../helmet/Helmet';

const NotFound = () => {
  
  return (
    <main className="w-full h-screen flex justify-center items-center bg-white">
      <Helmet 
        title={"Items - Error 404"} 
        description={"Page not found route"} 
        keywords={"not found, route"}
      />
      <div className="flex flex-col gap-5">
        <Link to={"/"}>
            <button 
            className="bg-slate-700 text-white font-medium rounded-md border hover:opacity-70 duration-150
            px-12 py-2 w-[150px]">
                Back
            </button>
        </Link>
        <h1 className="text-4xl font-bold text-slate-700">
            Ops, page not found.
        </h1>
      </div>
    </main>
  )
}

export default NotFound;