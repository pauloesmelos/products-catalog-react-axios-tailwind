import React from 'react';
import { FaStar } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const CardProduct = ({ id, fotos, nome, preco, vendido }) => {

  return (
    <NavLink
        to={`product/${id}`}
        className="shadow-md cursor-pointer group border-[3px] border-transparent hover:border-[#2568E6] duration-150 sm:w-[230px] lg:w-[300px] 
        rounded-md"
    >
      <div className="overflow-hidden">
        <img 
            className="object-cover w-full h-[300px] group-hover:scale-[1.3] group-hover:brightness-75 duration-150 rounded-t-md" 
            src={fotos[0]?.src} 
            alt={nome} 
            title={id}
        />
      </div>
      <div className="p-3">
        <div>
            <h3 className="font-bold text-slate-800">
                {nome}
            </h3>
        </div>
        <div className="w-full flex justify-between items-center">
            <div className="flex items-center gap-1">
                {Array.from({
                    length: 5
                }).map((_, index) => (
                    <FaStar 
                        className="text-[#2568E6]" 
                        key={index * Math.random()} 
                    />
                ))}
            </div>
            <div className="hidden sm:block">
                <p className="p-2 bg-sky-200 rounded-md text-sm text-sky-600">
                    {!vendido ? ("Indisponível") : ("Em estoque")}
                </p>
            </div>
        </div>
        <div>
            <p>
                {Number.parseFloat(preco).toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL"
                })}
            </p>
        </div>
      </div>
    </NavLink>
  )
}

export default CardProduct;