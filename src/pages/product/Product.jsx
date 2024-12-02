import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Navbar from '../../components/navbar/Navbar';
import Loading from '../../components/products/loading/Loading';
import GlobalProducts from '../../global/products/GlobalProducts';
import { default as Helmet } from '../../helmet/Helmet';
import useGetProduct from '../../hooks/useGetProduct/useGetProduct';

const Product = () => { // product specify - query by id
  const { id } = useParams();
  const { data, isLoading } = useGetProduct(id);
  const { product, setProduct } = React.useContext(GlobalProducts);

  React.useEffect(() => {
    setProduct(data);
  }, [id, data]);

  if(isLoading || !product) return <Loading />
  return (
    <main className="w-full">
      <Navbar />
      <Helmet 
        title={`Items - ${data?.nome}`} 
        description={"Product catalog specif, query with ID, Buyed with React, Axios, React Query and Tailwind"} 
        keywords={"product, specify, id"}
      />
      <div className="w-full max-w-[1200px] mx-auto px-5 py-4">
        <div className="w-[120px]">
            <Link to={"/"}>
                <button className="bg-[#2568E6] text-white px-8 py-2 rounded-full
                border border-[#2568E6] hover:bg-white hover:text-[#2568E6] duration-150 w-[120px] text-sm">
                    Home
                </button>
            </Link>
        </div>
        <div className="border shadow-lg mt-6 rounded-lg p-6">
            {/* product */}
            <div className="grid grid-cols-3">
                <div className="col-span-1">
                    <img 
                        className="object-cover w-[300px] rounded-lg" 
                        src={data.fotos[0].src} 
                        title={data.nome} 
                        alt={data.nome}
                    />
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                    <h1 className="text-3xl font-bold text-slate-800">
                        {data.nome}
                    </h1>
                    <div className="flex items-center gap-1">
                        {Array.from({
                            length: 5
                        }).map((_, index) => (
                            <FaStar 
                                key={index * Math.random()} 
                                className="text-[#2568E6]" 
                                size={15}
                            />
                        ))}
                    </div>
                    <p className="text-3xl font-medium text-sky-slate">
                        {Number.parseFloat(data.preco).toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL"
                        })}
                    </p>
                    <div className="text-lg">
                        <p className="font-semibold">
                            Contact:
                            <a 
                                href={`mailto:${data.usuario_id}?subject=Assunto do email`} 
                                className="text-[#2568E6] font-bold"
                            >
                                {" " + data.usuario_id}
                            </a>
                        </p>
                    </div>
                    <div className="flex items-center gap-3">
                        <p className="font-semibold">
                            TAG: 
                        </p>
                        <p className="w-[115px] text-sm p-2 bg-sky-200 text-sky-700 rounded-md font-bold">
                            {data.id}
                        </p>
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-5 mt-5">
                    <button className="px-6 py-2 rounded-md w-[200px] bg-[#2568E6] hover:opacity-50 text-white font-medium duration-150">
                        Buy Now
                    </button>
                    <button className="px-6 py-2 rounded-md w-[200px] bg-sky-200 hover:opacity-50 text-[#2568E6] font-medium duration-150">
                        Add Cart
                    </button>
                </div>
            </div>
            <div className="mt-16">
                <h2 className="font-bold text-slate-800 text-xl">
                    Description
                </h2>
                <p className="tracking-wide text-neutral-400 text-sm mt-4">
                    {data.descricao}
                </p>
            </div>
        </div>
      </div>
    </main>
  )
}

export default Product;