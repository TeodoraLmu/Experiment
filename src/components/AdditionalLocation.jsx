import React from "react";
import {useState} from "react";
import logo  from './Travelbuddy.png' 
import { hover } from "@testing-library/user-event/dist/hover";
import "./Additional.css"
import ScaleCleanliness from "./ScaleCleanliness";
import ScaleLocation from "./ScaleLocation";


function AdditionalLocation(){

    return <div>
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet" ></link>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      <div className="header"><img src={logo}></img></div>
        <div className='main-container'>
            <div className="container">   
                
                <div className="scale">
                    <ScaleLocation/>
                </div>
            </div>

     
        </div>

        <a href="./End" target="_self" rel="noreferrer">
        <button className='comment-button'>Submit</button></a>
    </div>
    
    
}




export default AdditionalLocation;