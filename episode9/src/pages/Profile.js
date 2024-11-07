import {Changeusername} from "../components/Changeusername";
import { useContext } from "react";
import { Appcontext } from "../App";

export const Profile = () => {
    const {username, setUsername} = useContext(Appcontext);
    return (
        <div>
            <h1>Profile, username is {username}</h1>
            <Changeusername />
        </div>
    );
};