import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import App from './app/App.jsx'
import './app/index.css'
import { Provider } from "react-redux";
import {store} from "./app/store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
)
