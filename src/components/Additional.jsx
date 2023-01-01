import React from "react";
import {useState} from "react";
import logo  from './Travelbuddy.png' 
import { hover } from "@testing-library/user-event/dist/hover";
import "./Additional.css"
import Icon from '@material-ui/core/Icon';

var valueEmoji = 1;
var valueTag='nothing';

function Additional(){
    
    const emojis = [
        { label: "Bad", icon: "mood_bad" },
        { label: "Dissatisfied", icon: "sentiment_dissatisfied" },
        { label: "Neutral", icon: "sentiment_neutral" },
        { label: "Satisfied", icon: "sentiment_satisfied_alt" },
        { label: "Happy", icon: "mood" },
        
    ]
    const [show,setShow]= useState(false);
    
    const style = {
        cursor: "pointer",
        color: show ? '  rgb(216, 157, 20)' : '',
        
    };
    
    return <div>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" ></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="header"><img src={logo}></img></div>
        
        <div className='main-container'>
    
            <div className="container">   
            <h2 className="title">Cleanliness</h2>
                <div className="scale">
                
                {emojis.map(({ label, icon }) => {
                    return (
                <span key={label} class="material-icons md-48" style={style} >
                    <Icon onClick={handleClick}>{icon}</Icon>
                </span>
        );
      })}

                <span class="material-icons md-48" id="1"
                onClick={()=>{valueEmoji=1;  setShow(!show)}}>
                    mood_bad
                </span>
                <span className="material-icons md-48" id="2" onClick={()=>{valueEmoji=2; setShow(!show);}} style={style}>
                    sentiment_dissatisfied
                </span>
                <span class="material-icons md-48" id="3"  onClick={()=>{valueEmoji=3; setShow(!show) }}>
                        sentiment_neutral
                </span>
                <span class="material-icons md-48" id="4" onClick={()=>{valueEmoji=4; setShow(!show)}}>
                    sentiment_satisfied_alt
                </span>
                <span class="material-icons md-48" id="5" onClick={()=>{valueEmoji=5; setShow(!show)}}>
                    mood
                </span>
                </div></div>
                <div className ='tags-additional'>
                
            {
            show && (valueEmoji===5) ? 
            <div > <button className = "tag-additional" >Private</button>
            <button className = "tag-additional" >Good temperature</button>
            <button onClick={()=>{valueTag='Spacious' ; console.log(valueTag); console.log(active); handleClick(active); console.log(active);}}
        className={active && (valueTag==='Spacious') ? "cont2" : "tag-additional" }>Spacious</button>
            <button onClick={()=>{valueTag='Well decorated' ; console.log(valueTag); console.log(active); handleClick(active); console.log(active);}}
        className={active && (valueTag==='Well decorated') ? "cont2" : "tag-additional"} >Well decorated</button>
            <button className='tag-additional'>Quiet</button>
            </div>:null
           
            
            }
        
            
            {
            show && (valueEmoji===4) ?
            <div><button className='tag-additional'>Comfy bed</button>
            <button className='tag-additional'>Well maintained</button>
            
            <button className='tag-additional'>Spacious</button>
            <button className='tag-additional'>Renovated</button>
            <button className='tag-additional'>Quiet</button>
            </div>:null
            
            }     

            {
            show && (valueEmoji===3) ?
            <div><button className='tag-additional'>Fresh sheets</button>
            <button className='tag-additional'>Water too cold</button>
            
            <button className='tag-additional'>Place too small</button>
            <button className='tag-additional'>Needs better furniture</button>
            {
              
              console.log(valueEmoji)
          }</div>:null
            
            } 

            {
            show && (valueEmoji===2) ?
            <div><button className='tag-additional'>Dirty sheets</button>
            <button className='tag-additional'>Bad service</button>
            <button className='tag-additional'>Cold</button>
            {
              
              console.log(valueEmoji)
          }</div>:null
            
            }

            {
            
            show && (valueEmoji===1) ?
            <div><button className='tag-additional'>Mold</button>
            <button className='tag-additional'>Insects</button>
            <button className='tag-additional'>Smelly</button>
           </div>:null
            
            } 

        </div>


        {/* <div className="container"> 
            <h2 className="title">Location </h2>
                <div className="scale">
                    <span class="material-icons md-48" onClick={()=>{valueEmoji=6; setShow(!show); setHideLightbox(false)}}>
                        mood_bad
                    </span>
                    <span class="material-icons md-48" onClick={()=>{valueEmoji=7;setShow(!show); setHideLightbox(false)}}>
                        sentiment_dissatisfied
                    </span>
                    <span class="material-icons md-48"  onClick={()=>{valueEmoji=8; setShow(!show); setHideLightbox(false)}}>
                            sentiment_neutral
                    </span>
                    <span class="material-icons md-48" onClick={()=>{valueEmoji=9;setShow(!show); setHideLightbox(false)}}>
                        sentiment_satisfied_alt
                    </span>
                    <span class="material-icons md-48" onClick={()=>{valueEmoji=10; console.log(valueEmoji); setShow(!show);  setHideLightbox(true)}}>
                        mood
                    </span>
                </div>
                <div className ='tags'>
                    {
                        show && (valueEmoji===10) ?
                        <div> <button className='tag'>Private parking</button>
                        <button className='tag'>Wheelchair accesible</button>
                        <button className='tag'>Garage</button>
                        <button className='tag'>City center</button>
                        </div>:null
                    
                    }
                

                    {
                        show && (valueEmoji===9) ?
                        <div><button className='tag'>Street parking nearby</button>
                        <button className='tag'>Supermarket nearby</button>
                        <button className='tag'>Central location</button>
                        <button className='tag'>Bakery nearby</button>
                        <button className='tag'>Spacious</button>
                        <button className='tag'>Renovated</button>
                        <button className='tag'>Quiet</button></div>:null
                    
                    }     

                    {
                        show && (valueEmoji===8) ?
                        <div><button className='tag'>
                            Public transportation available
                        </button>
                        <button className='tag'>Suburbs</button>
                        <button className='tag'>Private parking</button>
                        <button className='tag'>Access to highway</button>
                        <button className='tag'>Supermarket nearby</button></div>:null
                    
                    } 

                    {
                        show && (valueEmoji===7) ?
                        <div><button className='tag'>Limited public transportation available</button>
                        <button className='tag'>No restaurants or cafes nearby</button>
                        <button className='tag'>No supermarket nearby</button></div>:null
                    
                    }

                    {
                    
                        show && (valueEmoji===8) ?
                        <div><button className='tag'>No parking nearby</button>
                        <button className='tag'>Bad road conditions</button><button className='tag'>No public transportation available</button>
                        <button className='tag'>Unclear instructions to accomodation</button></div>:null
                    
                    } 
                
                </div>
            </div>
                */}        
        </div>

        
    </div>
    
    
}



/*function ShowMore(){

    const [show,setShow]=useState(false);
    const [hideLightbox, setHideLightbox] = useState(true); 
    {setShow(!show); 
    setHideLightbox(false)}
    
        
        show ?
        <div><button className='tag'>Dirty sheets</button>
        <button className='tag'>Bad service</button>
        <button className='tag'>Cold</button></div>:null
        
        


}*/
export default Additional;