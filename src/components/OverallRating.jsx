import React from "react";
import {useState} from "react";
import "./OverallRating.css"
//import { RatingComponent } from 'react-rating-emoji'
import logo  from './Travelbuddy.png'
//import {Stack, Rating} from '@mui/material'
import MoodIcon from '@mui/icons-material/Mood';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import SentimentSatisfiedIcon from '@mui/icons-material/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import { hover } from "@testing-library/user-event/dist/hover";

function Sad(props){
  const {fill = 'none'} = props;
  return(
  
    <svg className="emoji" xmlns="http://www.w3.org/2000/svg" fill={fill} stroke="currentColor" viewBox="0 0 24 24"><path d="M16.957 9.783C16.74 10.972 15 12 15 12s-1.74-1.028-1.957-2.217C12.828 8.611 13.459 8 14.112 8a.98.98 0 0 1 .888.471.98.98 0 0 1 .888-.471c.653 0 1.284.611 1.069 1.783zM9 12s1.74-1.028 1.957-2.217C11.172 8.611 10.541 8 9.888 8A.98.98 0 0 0 9 8.471.98.98 0 0 0 8.112 8c-.653 0-1.284.611-1.069 1.783C7.26 10.972 9 12 9 12zm6.225 2.368a4 4 0 0 1-6.45 0 1 1 0 0 0-1.55 1.264 6 6 0 0 0 9.55 0 1 1 0 1 0-1.55-1.264zM23 12A11 11 0 1 1 12 1a11.013 11.013 0 0 1 11 11zm-2 0a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9z"/></svg>

  );
}
function Neutral(props){
  const {fill = 'none'} = props;
  return(
  
    <svg className="emoji" xmlns="http://www.w3.org/2000/svg" fill={fill} stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1" d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9.011 9.011 0 0 1-9 9zm6-8a6 6 0 0 1-12 0 1 1 0 0 1 2 0 4 4 0 0 0 8 0 1 1 0 0 1 2 0zM8 10V9a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0zm6 0V9a1 1 0 0 1 2 0v1a1 1 0 0 1-2 0z" /></svg>
    
  );
}
function Smile(props){
  const {fill = 'none'} = props;
  return(
  
    <svg className="emoji" xmlns="http://www.w3.org/2000/svg" fill={fill} stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="1" d="M12 1a11 11 0 1 0 11 11A11.013 11.013 0 0 0 12 1zm0 20a9 9 0 1 1 9-9 9.01 9.01 0 0 1-9 9zM8 11V9a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm8-2v2a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm-8 5h8a4 4 0 0 1-8 0z" /></svg>
   
  );
}
function Happy(props){
  const {fill = 'none'} = props;
  return(
  
  <svg className="emoji" xmlns="http://www.w3.org/2000/svg" fill={fill} stroke="currentColor" viewBox="0 0 24 24"><path d="M10 9v2a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0zm5-1a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1zm8 4A11 11 0 1 1 12 1a11.013 11.013 0 0 1 11 11zm-2 0a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9z"/></svg>
    
  );
}
function Hearts(props){
  const {fill = 'none'} = props;
  return(
  
  <svg className="emoji" xmlns="http://www.w3.org/2000/svg" fill={fill} stroke="currentColor" viewBox="0 0 24 24"><path d="M8 11V9a1 1 0 0 1 2 0v2a1 1 0 0 1-2 0zm7 1a1 1 0 0 0 1-1V9a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1zm-3 2a6.036 6.036 0 0 0-4.775 2.368 1 1 0 1 0 1.55 1.264 4 4 0 0 1 6.45 0 1 1 0 0 0 1.55-1.264A6.036 6.036 0 0 0 12 14zm11-2A11 11 0 1 1 12 1a11.013 11.013 0 0 1 11 11zm-2 0a9 9 0 1 0-9 9 9.01 9.01 0 0 0 9-9z"/></svg>
    
  );
}



function RatingIcon(props){

  const{

    index,
    rating,
    hoverRating,
    onMouseEnter,
    onMouseLeave,
    onSaveRating,
  } = props;

  const fill = React.useMemo(() => {

    if(hoverRating >=index){
      return 'yellow';
    }
    else if (!hoverRating && rating >= index){
      return 'yellow';
    }
    return 'none';
  }, [rating,hoverRating,index]);

  if(index==5){
    return (
      <div 
        class='cursor-pointer'
        onMouseEnter={()=> onMouseEnter(index)}
        onMouseLeave={()=> onMouseLeave()}
        onClick={()=> onSaveRating(index)}>
        <Sad fill={fill}/>
      </div>

    )
  }
  else if(index==4){
    return (
      <div 
        class='cursor-pointer'
        onMouseEnter={()=> onMouseEnter(index)}
        onMouseLeave={()=> onMouseLeave()}
        onClick={()=> onSaveRating(index)}>
        <Neutral fill={fill}/>
       
      </div>

    )
  }
  else if(index==3){
    return (
      <div 
        class='cursor-pointer'
        onMouseEnter={()=> onMouseEnter(index)}
        onMouseLeave={()=> onMouseLeave()}
        onClick={()=> onSaveRating(index)}>
        <Smile fill={fill}/>
       
      </div>

    )
  }
  else if(index==2){
    return (
      <div 
        class='cursor-pointer'
        onMouseEnter={()=> onMouseEnter(index)}
        onMouseLeave={()=> onMouseLeave()}
        onClick={()=> onSaveRating(index)}>
        <Happy fill={fill}/>
       
      </div>

    )
  }
  else if(index==1){
    return (
      <div 
        class='cursor-pointer'
        onMouseEnter={()=> onMouseEnter(index)}
        onMouseLeave={()=> onMouseLeave()}
        onClick={()=> onSaveRating(index)}>
        <Hearts fill={fill}/>
       
      </div>

    )
  }

  
}
const OverallRating = () => {
  const [rating,setRating] = useState(0);
  const [hoverRating, setHoverRating] = React.useState(0);
  const onMouseEnter = (index) => {
    setHoverRating(index);
  };
  const onMouseLeave = () => {
    setHoverRating(0);
  };
  const onSaveRating = (index) => {
    setRating(index);
  };

  return (
    <div className="home">
        <div className="header"><img src={logo}></img></div>
      <div class="container-home">
            <h1 className="intro">
              Hello traveller! How was your stay?
            </h1>
            <div className="box">
              {[1,2,3,4,5].map((index)=> {
                return(
                  console.log(rating), //printing out scores 
                  <RatingIcon index={index} rating={rating} hoverRating={hoverRating} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} onSaveRating={onSaveRating}></RatingIcon>
                  
                )
              }
              )}
            
            </div>
            <a href="./Likes" target="_blank" rel="noreferrer">
            <button className='start'>Next</button>
            </a>
      </div>
    </div>
  );
}

export default OverallRating;
