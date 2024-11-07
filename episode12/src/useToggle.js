import { useState } from "react";

export const useToggle = (initialVal = false) => {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState((val)=>!val)
    }

    return [state, toggle];
    // instead of passing an array we can also pass an object but 
    // then we dont have th eliberty to call it diffferenty in app.js
};