import React from "react";

// function Greet(){
//     return <h1>Hello Suraksha</h1>
// }

// export default Greet

export const Greet = props => {
    console.log(props)
    return (<div>
            <h1> Hello{props.name}, {props.nickname}</h1>
            {props.children}
    </div>
)
}

// export default Greet