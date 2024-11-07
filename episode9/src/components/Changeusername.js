import { useState } from "react";
import { Appcontext } from "../App";
import { useContext } from "react";

export const Changeusername = () => {

    const {username, setUsername} = useContext(Appcontext);
    const [newUsername,setNewUsername] = useState("");

    return (<div>
        {" "};
        <input onChange={(event)=>setNewUsername(event.target.value)}/>
        <button onClick={()=>{setUsername(newUsername)}}>Change Username</button>
    </div>);
};