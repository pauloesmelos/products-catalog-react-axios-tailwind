import React from 'react';
import ProductsList from './ProductsList';

const Products = () => {
  return (
    <main className="w-full pt-2">
      <div className="w-full max-w-[1200px] mx-auto px-5 py-4">
        <div className="w-full">
            {/* filter */}
            <div className="w-full flex flex-col gap-4">
                <h3 className="font-bold text-neutral-900 text-lg">
                    Recommended
                </h3>
                <ul className="flex items-center gap-2 flex-wrap">
                    <li>
                        <button className="px-4 py-2 border rounded-md bg-white text-neutral-700 hover:bg-sky-300 hover:border-sky-300 duration-150">
                            All Products
                        </button>
                    </li>
                    <li>
                        <button className="px-4 py-2 border rounded-md bg-white text-neutral-700 hover:bg-sky-300 hover:border-sky-300 duration-150">
                            Notebook
                        </button>
                    </li>
                    <li>
                        <button className="px-4 py-2 border rounded-md bg-white text-neutral-700 hover:bg-sky-300 hover:border-sky-300 duration-150">
                            Smartphone
                        </button>
                    </li>
                    <li>
                        <button className="px-4 py-2 border rounded-md bg-white text-neutral-700 hover:bg-sky-300 hover:border-sky-300 duration-150">
                            Camera
                        </button>
                    </li>
                    <li>
                        <button className="px-4 py-2 border rounded-md bg-white text-neutral-700 hover:bg-sky-300 hover:border-sky-300 duration-150">
                            Smartwatch
                        </button>
                    </li>
                </ul>
            </div>
            {/* products list */}
            <ProductsList />
        </div>
      </div>
    </main>
  )
}

export default Products;