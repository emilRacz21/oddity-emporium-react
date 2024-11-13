/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect } from "react";
const url = import.meta.env.VITE_SHOP_API;

//GET - get all items from API
export default function ShopApi(setData) {
  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => setData([error]));
  }, []);
}

//POST - add a new item to API
export function handleAddInvention() {
  const newInvention = {
    name: "Czesc to ja",
    description: "Opis",
    uses: "coś",
    creator: "ja",
    image: "sssssss",
    date_of_invention: "12.12.22222",
    patent_number: "12121211212",
    price: "222222",
    weight: "21123123",
    dimensions: "23132321",
    power_source: "sssss",
    operating_time: "qwqeqwewqe",
    material: "dasdasdad",
    status: "ssss",
    category: "sasaas",
    target_audience: "targetAudience",
  };

  axios
    .post(url, newInvention)
    .then((response) => console.log(response))
    .catch((error) => console.log(error));
}
//DELETE - delete an existion item from API
export function deleteInvention() {
  axios.delete(`${url}/672e072e51729832868be5a2`);
}
