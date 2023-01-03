import React from "react";
import {useState} from "react";
import DislikesContainer from "./Dislikes/DislikesContainer";
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

      <DislikesContainer></DislikesContainer>
        
      </div>

      <a href="./Additional" target="_self" rel="noreferrer">
        <button className='comment-button'>Next</button></a></div>
    </div>
    </div>
    
  }
  
  export default Dislikes;