import React from "react";

const Todoitems = (props) => {
    return (
        <li classname="todo-items">
            <span> 
            {props.completed ? <></> : <input type ="checkbox" />}  
            <div id="container">
                <span classname="todo-items-text">{props.text}</span>
                <p>...</p>
            </div>
            </span>
        </li>   
    );
};

export default Todoitems;