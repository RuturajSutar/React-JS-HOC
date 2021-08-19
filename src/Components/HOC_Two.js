import React from "react";


const HOC_Two = (props) => {
    return (
        <div style = {{backgroundColor : "red"}}>
            <props.cmp></props.cmp>
        </div>
    );
}

export default HOC_Two;