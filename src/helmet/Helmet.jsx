import React from 'react';

const Helmet = ({ title, description, keywords }) => {
  React.useEffect(() => {
    document.querySelector("title").innerText = title;
    document.querySelector("meta[name=description]").setAttribute("content", description);
    document.querySelector("meta[name=keywords]").setAttribute("content", keywords)
  }, []);
  return (
    <>

    </>
  )
}

export default Helmet;