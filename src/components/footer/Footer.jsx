import React from 'react';

const Footer = () => {
  const getYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#2568E6] mt-16">
      <div className="w-full max-w-[1300px] mx-auto p-6">
        <div className="w-full">
            <p className="text-sm text-white font-medium flex items-center justify-center">
                &copy;
                {` ${getYear} `}
                - CNPJ: 123.1234.1234-000
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;