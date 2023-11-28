import React from 'react';
import './buttons.css'





export default function Buttons(){
    return(
        <div className="buttons-container">
            <h3 className="header">Introduction:</h3>
        <div className="basics-container">

            <button className='buttons background-basics'>Datatypes</button>
            <button className='buttons background-basics'>Conditionals</button>
            <button className='buttons background-basics'>Operations</button>
            <button className='buttons background-basics'>Loops</button>
            <button className='buttons background-basics'>Functions</button>
            <button className='buttons background-basics'>Arrays</button>

        </div>
            <h3 className="header">Data structures & visualizers:</h3>
            <div className="intermediate-container">
                <button className='buttons background-inter'>Sorting</button>
                <button className='buttons background-inter'>Lists</button>
                <button className='buttons background-inter'>Binary Tree</button>
                <button className='buttons background-inter'>Loops</button>
                <button className='buttons background-inter'>OOP</button>
                <button className='buttons background-inter'>Queues</button>
            </div>
        </div>

    );
}