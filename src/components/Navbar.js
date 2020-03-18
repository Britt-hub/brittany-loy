import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import data from '../data';

import {
    Link as RouterLink
  } from "react-router-dom";

class Navbar extends Component {
    state = {  }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render() { 
        return (<nav>

            
            <ul>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    onClick={this.scrollToTop}
                >Home</Link></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="About"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >About</Link></li>
                <li><RouterLink
                    className='link'
                    activeClass="active"
                     to="/work"
                >Work</RouterLink></li>
                <li><Link
                    className='link'
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >Contact</Link></li>
                <li>
                <a target='_blank' rel="noopener noreferrer" href={data.social[1].url}>{data.social[1].name}</a>

               </li>
            </ul>
        </nav>);
        
    }
}
 
export default Navbar;