import axios from "axios";
const url = import.meta.env.VITE_SHOP_API;

//GET - get all items from API
export default async function fetchShopData(setData, setResponseText) {
  try {
    const response = await axios.get(url);
    setData(response.data);
  } catch (error) {
    setResponseText(
      <p className="loading-text error">{error + " Please try again later!"}</p>
    );
  }
}

//POST - add a new item to API
export function handleAddInvention(newItems, setData, setErrorMessage) {
  const formData = new FormData();

  formData.append("name", newItems.name);
  formData.append("description", newItems.description);
  formData.append("uses", newItems.uses);
  formData.append("creator", newItems.creator);
  formData.append("price", newItems.price);
  formData.append("weight", newItems.weight);
  formData.append("dimensions", newItems.dimensions);
  formData.append("power_source", newItems.power_source);
  formData.append("material", newItems.material);
  formData.append("status", newItems.status);
  formData.append("category", newItems.category);
  formData.append("target_audience", newItems.target_audience);
  formData.append("image", newItems.image);

  return axios
    .post(url, formData)
    .then(() => {
      fetchShopData(setData, () => {});
    })
    .catch((error) => setErrorMessage(`Try again later (${error.name})`));
}

//POST - add a new review to existing invention
export function postReviewInvention(data, id, setData) {
  return axios
    .post(`${url}/${id}/reviews`, data)
    .then(() => fetchShopData(setData, () => {}))
    .catch((error) => console.log(error));
}

//DELETE - delete an existion item from API
export function deleteInvention() {
  axios.delete(`${url}/672e072e51729832868be5a2`);
}
