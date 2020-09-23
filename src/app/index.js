import React from 'react';
import ReactDOM from 'react-dom';
import { Action } from '@talend/react-components';

ReactDOM.render(
    <div>
        <h1>Hello, world!</h1>
        <Action onClick={(e) => console.log('clicked')} label="Hello"></Action>
    </div>,
    document.getElementById('root')
);
  