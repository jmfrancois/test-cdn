import React from 'react';
import ReactDOM from 'react-dom';
import { Action } from '@talend/react-components';
import i18n from 'i18next';
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
    react: {
        useSuspense: false
    }
});

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>

        <Action onClick={(e) => console.log('clicked')} label="Hello"></Action>
    </div>,
    document.getElementById('app')
);
  