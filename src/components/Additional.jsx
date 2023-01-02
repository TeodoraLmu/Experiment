import React from "react";
import {useState} from "react";
import logo  from './Travelbuddy.png' 
import { hover } from "@testing-library/user-event/dist/hover";
import "./Additional.css"
import ScaleCleanliness from "./ScaleCleanliness";


function Additional(){

    return <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" ></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="header"><img src={logo}></img></div>
        
        <div className='main-container'>
            <div className="container">   
                <h2 className="title">Cleanliness</h2>
                <div className="scale">
                    <ScaleCleanliness/>
                </div>
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