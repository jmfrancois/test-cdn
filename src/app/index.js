import React from "react";
import ReactDOM from "react-dom";
import { Action } from "@talend/react-components";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  react: {
    useSuspense: false,
  },
});
const RootComponent = function MyComponent(props) {
  return (
    <div>
      <h1>Hello {props.hello}</h1>
      <Action onClick={(e) => console.log("clicked")} label="Hello"></Action>
    </div>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById("app"));
