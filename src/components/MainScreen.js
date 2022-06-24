import React from "react";
export default (props)=>{
    return(
    <div>
        <h1 className="mainheading">Quizzical</h1>
        <p>Its a quiz app using React library. 
        The user will receive five questions of different categories each time, choose the correct answer and check the quiz with the click of a button.</p>
        <button className="startquiz" onClick={props.handleClick}>Start Quiz</button>
    </div>
)
}