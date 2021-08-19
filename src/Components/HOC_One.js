import React from "react";


const HOC_One = (props) => {
    return (
        <div style = {{backgroundColor : "green"}}>
            <props.cmp></props.cmp>
        </div>
    );
}

export default HOC_One;