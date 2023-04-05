import React from "react";

function Header(props) {
    console.log(props)
    return (
        <div>
            <h3 style={{color:"tomato", fontsize:"40px"}}>Testing Inline styling inside the Header</h3>
            <h1>My name is {props.name} and my Best color is {props.color}. I'm {props.age} years old</h1>
        </div>
    )
}

export default Header;
