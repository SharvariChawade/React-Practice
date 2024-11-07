import { Appcontext } from "../App";
import { useContext } from "react";

export const Home = () => {

    const {username,setUsername} = useContext(Appcontext);

    return <h1>This is Home Page, username is {username}</h1>
};