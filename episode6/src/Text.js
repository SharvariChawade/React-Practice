import { useState, useEffect } from "react";

const Text = () =>{
    const [text,setText] = useState("");

    useEffect(()=>{
        console.log('COMPONENT MOUNTED');

        return (console.log('COMPONENT UNMOUNTED'));
    },[]);

    return (
        <div>
            <input type="text" onChange ={(event)=>setText(event.target.value)} />
            <h1>{text}</h1>
        </div>
    );
}

export default Text;