import React from 'react';
import { TailSpin } from "react-loader-spinner";
const Loading = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <TailSpin
        visible={true}
        height="80"
        width="80"
        color="#2568E6"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  )
}

export default Loading;