import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

export const Home = () => {

    const {data,isLoading,refetch} = useQuery({
        queryKey:["cat"],
        queryFn:() => {return Axios.get("https://catfact.ninja/fact").then((res)=>res.data)},
    });
    if (isLoading) {
        return <div>Getting you a cat fact!</div>;
    }
    return (
        <div> 
            <h1>This is Home Page!</h1>
            <h2>{data?.fact}</h2>
            <button onClick={refetch}>Update</button>
        </div>
    );
}