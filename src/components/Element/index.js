import React from "react";
import "./style.css";

const Element = (props) => (

  
    <div className="header">
      <div className="title">{props.children}
      <img src ="https://media.giphy.com/media/zhrlcZJsvQWDm/giphy.gif" alt="..."/>
      </div>
      <div>Test your memory! Click on each character once and beat the highscore.</div>
      <div className="scores">
       <div className ="scoreDiv"> Score: {props.score} Highscore: {props.highscore} </div> 
      </div>
    </div>
  );

  



export default Element;

