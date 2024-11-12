export default async function FormApi(
  event,
  setMessage,
  setInputs,
  emptyObject
) {
  event.preventDefault();

  const FORM_API = `https://script.google.com/macros/s/${
    import.meta.env.VITE_FORM_API
  }/exec`;

  const formEle = document.querySelector("form");
  const formDatab = new FormData(formEle);

  function empty(color, message) {
    setInputs(emptyObject);
    setMessage(<p style={{ color }}>{message}</p>);
  }

  await fetch(FORM_API, {
    method: "POST",
    body: formDatab,
    headers: {
      "Content-Type": "application/json",
    },
    mode: "no-cors",
  })
    .then(() => empty("rgb(50, 185, 50)", "Successfully send!"))
    .catch(() => empty("red", "Failed to send. Please try again."));
}
