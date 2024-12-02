import axios from "axios";
import { useQuery } from "react-query";
import API from "../../api/API";

const getProduct = async (id) => {
    return await axios.get(`${API}/${id}`)
    .then(product => product.data)
    .catch(error => console.log(error));
}
const useGetProduct = (id) => {
  const { data, isLoading } = useQuery(
    ["get-product"],
    () => getProduct(id)
  )
  return { data, isLoading }
}

export default useGetProduct;