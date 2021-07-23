import { createContext, useState, useContext } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import App2 from "./App2";

const rootApp1 = document.getElementById("app1");
const rootApp2 = document.getElementById("app2");

export const MyLoveContext = createContext();

export function useMyLoveContext() {
  const context = useContext(MyLoveContext);
  if (!context) {
    throw new Error("always iu");
  }

  return context;
}

const MyLoveProvider = (props) => {
  const [name, setName] = useState("iu");

  return (
    <MyLoveContext.Provider value={{ name, setName }}>
      {props.children}
    </MyLoveContext.Provider>
  );
};

ReactDOM.render(
  <MyLoveProvider>
    <App />
  </MyLoveProvider>,
  rootApp1
);

ReactDOM.render(
  <MyLoveProvider>
    <App2 />
  </MyLoveProvider>,
  rootApp2
);
