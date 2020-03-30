import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import { SocialIcon } from 'react-social-icons';





class Contact extends Component {
    state = {  }
    render() { 
        return (  <div>
        <h1>
                <Fade bottom cascade> Contact.</Fade>
        </h1>
        <Fade bottom>
        <div className='contact-content'>
                <h1>
                Hire me today!!!<br></br>
                <span className='amazing-color'>I am looking for a job :)</span></h1>
                    <a href={`mailto:${data.contactEmail}`} className='email'>{data.contactEmail}</a>
                <ul>

                    {data.social.map((link,index)=>(
                        // <li key={index}><a target='_blank' rel="noopener noreferrer" href={link.url}>{link.name}</a></li>
                        <SocialIcon url={link.url} /> 
                    ))}   
                    </ul>
                 

        </div>
        </Fade>

        </div>);
    }
}
 
export default Contact;