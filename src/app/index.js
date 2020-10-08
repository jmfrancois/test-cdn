import React from "react";
import { Action } from "@talend/react-components";
import i18n from "i18next";
import cmf, { cmfConnect } from "@talend/react-cmf";
import containersModule, { AppLoader } from "@talend/react-containers";
// note: containers ne fonctionne pas sans react-router. ...
import getRouter from "@talend/react-cmf-router";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  react: {
    useSuspense: false,
  },
});
const router = getRouter({});

const RootComponent = cmfConnect()(function MyComponent(props) {
  return (
    <div>
      <h1>Hello {props.hello}</h1>
      <Action onClick={(e) => console.log("clicked")} label="Hello"></Action>
    </div>
  );
});

cmf.bootstrap({
  appId: "app",
  components: {
    Action,
  },
  AppLoader,
  RootComponent,
  modules: [router.cmfModule, containersModule],
});
