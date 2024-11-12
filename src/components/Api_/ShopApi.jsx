import axios from "axios";
import { useEffect } from "react";
export default function ShopApi() {
  const url = "https://atlantic-noisy-xylophone.glitch.me/inventions";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
  }, []);

  function handleDeleteInvention() {
    axios.delete(`${url}/672e072e51729832868be5a2`);
  }

  function handleAddInvention() {
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

  return (
    <>
      <button onClick={handleDeleteInvention}> Delete </button>
      <button onClick={handleAddInvention}> Add </button>
    </>
  );
}
