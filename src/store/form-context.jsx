import { createContext, useState } from "react";
export const FormContext = createContext();
export default function FormProvider({ children }) {
  const obj = {
    0: "",
    1: "",
    2: "",
    3: "",
  };
  const [inputs, setInputs] = useState(obj);
  const [message, setMessage] = useState(<p>*All labels are required</p>);
  return (
    <FormContext.Provider
      value={{ message, setMessage, inputs, setInputs, obj }}
    >
      {children}
    </FormContext.Provider>
  );
}
