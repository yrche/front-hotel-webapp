import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import './app/index.css'
import { Provider } from "react-redux";
import {store} from "./app/store/store.js";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Home} from "./pages/home/index.js";
import {Login} from "./pages/login/index.js";
import {NotFoundPage} from "./pages/notFoundPage/index.js";
import {Registration} from "./pages/registration/index.js";
import App from "./app/App.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <App>
                <Home />
            </App>
        )
    },
    {path: '/sign-in', element: <Login/>},
    {path: '/sign-up', element: <Registration/>},
    {path: '*', element: <NotFoundPage/>}
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    </StrictMode>
)
