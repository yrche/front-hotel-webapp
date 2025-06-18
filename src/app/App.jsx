import {useEffect, useRef} from "react";
import { useDispatch } from "react-redux";
import { refresh } from "../shared/model/index.js";

export const App = ({ children }) => {
    const dispatch = useDispatch();
    const hasRefreshed = useRef(false);

    useEffect(() => {
        if (hasRefreshed.current) return;
        hasRefreshed.current = true;

        if (localStorage.getItem("token")) {
            dispatch(refresh())
                .unwrap()
                .then((data) => {
                    localStorage.setItem("token", data.accessToken);
                })
        }
    }, []);

    return children;
};


export default App;
