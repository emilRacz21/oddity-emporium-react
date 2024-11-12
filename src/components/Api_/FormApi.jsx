import axios from "axios";
export default function FormApi() {
  let url =
    "https://script.google.com/macros/s/AKfycbyItROL61_vFdX1ou7aZZLUUlvIxoWfgiqsRnscCE-txS0sk9t1JWqB7APw9QT3blGQvQ/exec";
  const formEle = document.querySelector("form");
  const formDatab = new FormData(formEle);
  axios.post(url, formDatab);
}
