import React from "react";
import Answer from "./Answer";

export default (props)=>{


    let questions=props.quizstate.questions.map((element,index) => {
     
        return(
            <div key={index} className="question">
                <p>{element.questiontext}</p>
                <Answer ischeck={props.quizstate.ischeck} qid={element.questionid} clickhandel={props.clickhandel} allanswers={element.answers}/>
            </div>
        )
    });
    
    return (
       <div className="data-container">
            {questions}
            {!props.quizstate.ischeck ?
            <p></p>
            : <p>Your score is: {props.quizstate.score}</p>
            }
            <div className="lastbtn"> 
            {props.quizstate.ischeck ?
                 <button className="startquiz" onClick={props.replay}>Play Again</button>
                : <button className="startquiz" onClick={props.checkanswer}>Check Answers</button>
            }
              
            </div>
        </div>
    )
}