import axios from "axios";
import { useQuery } from "react-query";

const getProducts = async (api) => {
    return axios.get(api)
    .then( result => result.data )
    .catch( erro => console.log("erro"))
}
const useGetProducts = (url) => {
  const { data, isLoading } = useQuery( // não precisa colocar queryKey ou queryFn quando vamos declarar uma arrow function 
    ["get-products"], 
    () => getProducts(url)
  );
  return { data, isLoading };
}

export default useGetProducts;