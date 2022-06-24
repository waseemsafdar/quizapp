import React from "react";
import { nanoid } from "nanoid";
export default (props)=>{

     
    let options=props.allanswers.map( (element,i) => {
        let styles;
        if (element.isheld) {
          if (element.iscorrect && props.ischeck ) {
            //green
            styles = {
              backgroundColor: "#94D7A2",
              border: element.isheld ? "1px solid #d6dbf5" : "1px solid #d6dbf5",
            };
          } else {
            if (element.isheld && props.ischeck) {
              //red
              styles = {
                backgroundColor: "#F8BCBC",
                border: element.isheld ? "1px solid #d6dbf5" : "1px solid #d6dbf5",
              };
            }
            else {
                styles = {
                  backgroundColor: element.isheld ? "#d6dbf5" : "#ffffff00",
                  border: element.isheld ? "1px solid #d6dbf5" : "1px solid #4d5b9e",
                }
            }
          }
        } else {
          styles = {
            backgroundColor: element.isheld ? "#d6dbf5" : "#ffffff00",
            border: element.isheld  ? "1px solid #d6dbf5" : "1px solid #4d5b9e",
          };
        }
        return(
            <button style={styles}  onClick={(event) => props.clickhandel(event)} qid={props.qid} id={element.id} key={i} className="answer">{element.value}</button>
        )
    });
return (
    <div  className="answers">
    
        {options}
       
    
</div>
)

}