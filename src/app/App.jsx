import React from 'react';
import {Home} from "../pages/home/index.js";
import {Login} from "../pages/login/index.js";
import {LoginForm} from "../features/login/index.js";



const App = () => {
    return (
        <div className={'container'}>
            <LoginForm/>
        </div>
    );
};

export default App;
