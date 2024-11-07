import { login, logout } from "../store";
import { useDispatch,useSelector } from "react-redux";
import React, { useState } from "react";

export const Login = () => {
    const [newUserName, setNewUserName] = useState<string>("");
    const dispatch = useDispatch();
    const username = useSelector((state:any)=>state.user.value.username)
    return (
        <div>
            <h1>{username}</h1>
            <input onChange={(e:React.ChangeEvent<HTMLInputElement>)=>{setNewUserName(e.target.value)}}/>
            <button onClick={()=>dispatch(login({username:newUserName}))}>Login</button>
            <button onClick={()=>dispatch(logout())}>Logout</button>
        </div>
    );
}