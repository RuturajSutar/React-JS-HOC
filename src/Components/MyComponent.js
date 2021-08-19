import React , {useState} from "react";


const MyComponent = () => {
    const [num , SetNum] = useState(0);
    return (

        <div>
            <h1>{num}</h1>
            <button onClick = {() => SetNum(num+1)}>Click Me</button>
        </div>

    );
}

export default MyComponent;