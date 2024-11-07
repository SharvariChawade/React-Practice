import { useState } from "react"

export const useCounter = (initialVal = 0) => {

    const [state, setState] = useState(initialVal);

    const incState = () =>{
        setState(parseInt(state) + 1);
    }

    const decState = () =>{
        setState(state - 1);
    }

    const resetState = () =>{
        setState(0);
    }

    return [state, incState, decState, resetState, setState];
}