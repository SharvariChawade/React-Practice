interface PropType {
    name: string;
    age: number;
    isMarried: boolean;
    friends: string[];
    country: Country;
}

// making a datatype/object
export enum Country {
    Brazil="Brazil",
    Canada="Canada",
    Spain="Spain"
}

export const Person = (props : PropType) => {
    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h1>Age: {props.age}</h1>
            <h1>Is a person married? {props.isMarried ? "Yes" : "No"}</h1>
            {props.friends.map((friend: string)=>{
                return (<h1>{friend}</h1>);
            })}
            <h1>Country: {props.country}</h1>
        </div>
    )
}