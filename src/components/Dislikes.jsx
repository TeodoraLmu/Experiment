import React from "react";
import {useState} from "react";
import logo  from './Travelbuddy.png'
function Dislikes(){
    const [comment, setComment] = useState("");
    const onChangeHandler = (e) => {
      setComment(e.target.value);
    }
    const [show,setShow]=useState(false);
    const [hideLightbox, setHideLightbox] = useState(true); 
  
    return <div>
        <div className="header"><img src={logo}></img></div>
        
        <div className='main-container'>
      <div className='comment-flexbox'>
      <h3 className='comment-text'>What was not so great? <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" /><span class="material-symbols-outlined">
mood_bad
</span></h3>
      <textarea 
        value={comment}
        onChange={onChangeHandler} 
        className='input-box'/>
  
      <div className ='tags'>
        <button className='tag'>No public transportation</button>
        <button className='tag'>Noisy</button>
        <button className='tag'>Uncomfortable beds</button>
        <button className='tag'>Not clean</button>
        <button className='tag'>Smelly</button>
        <button className='tag' onClick={()=>{setShow(!show); setHideLightbox(false)}}>Show more...</button>
        
  
        {
        
        show?
        <div><button className='tag'>Slow internet</button>
        <button className='tag'>Bad service</button>
        <button className='tag'>Cold</button>
        <button className='tag'>Other(specify)</button></div>:null
        
        } 
      </div>

      <a href="./Additional" target="_blank" rel="noreferrer">
        <button className='comment-button'>Next</button></a></div>
    </div>
    </div>
    
  }
  
  export default Dislikes;