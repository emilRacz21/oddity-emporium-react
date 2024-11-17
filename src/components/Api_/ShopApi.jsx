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
  return axios
    .post(url, newItems)
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
