import React from "react";
import {useState} from "react";
import logo  from './Travelbuddy.png'
import likestTags from './likesTags';
import Like from './Like';
import LikesContainer from './LikesContainer';
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
        <LikesContainer></LikesContainer>
        </div>
        <a href="./Dislikes" target="_self" rel="noreferrer">
        <button className='comment-button'>Next</button></a>
        </div>
        
        </div>
    </div>    
    
  }

  
  
  export default Likes;