import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Footer} from "./shared/components/footer/footer";

ReactDOM.render(
    <React.StrictMode>
        <App/>
        <Footer/>
    </React.StrictMode>,
    document.getElementById('root')
);
