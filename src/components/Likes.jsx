import React from "react";
import {useState} from "react";
import logo  from './Travelbuddy.png'

import './Likes.css';
<script src="./script.js"></script>
function Likes(){
    const [comment, setComment] = useState("");
    const onChangeHandler = (e) => {
      setComment(e.target.value);
    }
    const [show,setShow]=useState(false);
    const [hideLightbox, setHideLightbox] = useState(true); 
    
    return <div className="all">
        <div className="header"><img src={logo}></img></div>
        
        <div className='main-container'>
        <div className='comment-flexbox'>
        
        <h3 className='comment-text'>What did you like? <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /><span class="material-symbols-outlined">
mood
</span></h3>
        
        
        <textarea 
            value={comment}
            onChange={onChangeHandler} 
            className='input-box'/>
    
        <div className ='tags'>
            
            <button className='tag'>Parking place</button> 
            <button className='tag'>Good location</button>
            <button className='tag'>Comfy beds</button>
            <button className='tag'>Good breakfast</button>
            <button className='tag'onClick={myFunction()}>Well decorated</button>
          <button className='tag' id="showMore" onClick={()=>{setShow(true); setHideLightbox(false)}}>Show more...</button>
            
    
            {
            
            show?
            <div><button className='tag'>Fast internet</button>
            <button className='tag'>Clean</button>
            <button className='tag'>Good coffee</button>
            <button className='tag'>Other(specify)</button></div>:null
            
            } 
        </div>
        <a href="./Dislikes" target="_blank" rel="noreferrer">
        <button className='comment-button'>Next</button></a>
        </div>
        
        </div>
    </div>    
    
  }

  
  
  export default Likes;