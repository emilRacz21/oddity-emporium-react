import axios from "axios";
export default function FormApi() {
  const FORM_API = `https://script.google.com/macros/s/${
    import.meta.env.VITE_FORM_API
  }/exec`;
  const formEle = document.querySelector("form");
  const formDatab = new FormData(formEle);
  axios.post(FORM_API, formDatab);
}
