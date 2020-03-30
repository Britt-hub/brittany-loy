import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data'
import { FaAngleDoubleDown } from 'react-icons/fa';



class Header extends Component {
    state = {}

    render() {
        return (<div>
        <h1 className='heading-background'>Brittany</h1>
            <header>
                <h1>
                    <Fade bottom cascade>{data.name}</Fade></h1>            </header>
            <Fade bottom>
            <p className='header-title'>
            {data.headerTagline[0]}<br></br>{data.headerTagline[1]}<br></br>
            {data.headerTagline[2]}
               <br></br>
                    {/* <button><a href={`mailto:${data.contactEmail}`} rel="noopener noreferrer" >Contact</a></button> */}
                </p>
                <FaAngleDoubleDown size={60} className= "animated infinite bounce"/>
            </Fade>



        </div>);
    }
}

export default Header;