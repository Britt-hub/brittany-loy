import React, { Component } from 'react';
import data from '../data';
import Fade from 'react-reveal/Fade';


function Resume () {
    
    
        return (<div> 
            <h1>
                <Fade bottom cascade> Resume.</Fade>
            </h1>
            <fade bottom>
                <div className='contact-content'>

                    <a target='_blank' rel="noopener noreferrer" href={data.social[1].url}>{data.social[1].name}</a>

                </div>

            </fade>
        </div>

        )
    
}

export default Resume;


