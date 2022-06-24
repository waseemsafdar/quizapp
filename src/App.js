import logo from './logo.svg';
import './App.css';
import Question from './components/Question';
import MainScreen from './components/MainScreen';
import { useState, useEffect } from 'react';
import { nanoid } from "nanoid";
function App() {
const [quizstate,setquizstate]=useState({
  isquizstarted:false,
  isfetched:false,
  ischeck:false,
  questions:[],
  score:0,
})

const handleClick= ()=>{
  
  setquizstate({...quizstate,isquizstarted:true})
  
}

const makeobjofquestions=(data)=>{
const obj=data.map(el=>{
  return {
    questionid:el.id,
    questiontext:el.question,
    answers:[
      ...el.incorrectAnswers.map(ans=>{return {
        value:ans,
        id:nanoid(),
        isheld:false,
        iscorrect:false
      }}),{
        value:el.correctAnswer,
            id:nanoid(),
            isheld:false,
            iscorrect:true
      }
    ].sort(() => Math.random() - 0.5)
  }
})
return(obj)
}

 useEffect( () => {
   
    if(quizstate.isquizstarted && !quizstate.isfetched){
      fetch("https://the-trivia-api.com/api/questions?limit=5")
      .then(response => response.json())
      .then(data => {
        setquizstate(
          {...quizstate,
            questions:makeobjofquestions(data.map(singledata=>{return singledata})),
            isfetched:true,
        })
      })
    }
 
}, [quizstate.isquizstarted])

const clickHandleofanswer= (event)=>{
  if(!quizstate.ischeck){
 let qus= quizstate.questions.map(question=>{
    if(event.target.getAttribute("qid")==question.questionid){
      let nq=question.answers.map(ans =>{
        if(ans.id==event.target.id){
          return {...ans,isheld:!ans.isheld}
        }
        else{
          return {...ans,isheld:(ans.isheld?false:false)}
        }
      
    })
    return {...question,answers:nq}
    }

    else{
      return question
    }
  })
  setquizstate({...quizstate,questions:qus})
}
}
const checkanswer=()=>{
  
  let count=0
  quizstate.questions.forEach(element => {
  let ar=[]
  ar=element.answers
      for (let index = 0; index < ar.length; index++) {
       
        if(ar[index].isheld && ar[index].iscorrect){
          count++
        }
      }
  });
  setquizstate({...quizstate,ischeck:true,score:count})
}
const replay=()=>{
  setquizstate({...quizstate,ischeck:false,isfetched:false,isquizstarted:false})
}
  return (
    <div className="App">
     <div className="appinner">
      
      {quizstate.isquizstarted ?  <Question checkanswer={checkanswer} replay={replay} clickhandel={clickHandleofanswer}  quizstate={quizstate} /> : <MainScreen handleClick={handleClick}/>}
      
    </div>
    </div>
  );
}

export default App;
