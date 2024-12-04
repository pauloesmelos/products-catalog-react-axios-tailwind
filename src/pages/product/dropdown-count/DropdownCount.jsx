import React from 'react';

const DropdownCount = ({ setDropdown, setCountDropdown }) => {
  const handleSelect = (value) => {
    setCountDropdown(value);
    setDropdown(false);
  }
  return (
    <div className="bg-white shadow-lg border w-[160px] rounded-md absolute">
      <ul className="text-lg">
        <li onClick={() => handleSelect(1)} className="hover:bg-[#2568E6] hover:text-white p-1 cursor-pointer">
            1 unidade
        </li>
        <li onClick={() => handleSelect(2)} className="hover:bg-[#2568E6] hover:text-white p-1 cursor-pointer">
            2 unidades
        </li>
        <li onClick={() => handleSelect(3)} className="hover:bg-[#2568E6] hover:text-white p-1 cursor-pointer">
            3 unidades
        </li>
        <li onClick={() => handleSelect(4)} className="hover:bg-[#2568E6] hover:text-white p-1 cursor-pointer">
            4 unidades
        </li>
        <li onClick={() => handleSelect(5)} className="hover:bg-[#2568E6] hover:text-white p-1 cursor-pointer">
            5 unidades
        </li>
      </ul>
    </div>
  )
}

export default DropdownCount;