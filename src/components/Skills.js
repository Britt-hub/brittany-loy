import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';
import { FaCss3Alt, FaHtml5, FaJsSquare, FaReact, FaNode, FaDatabase, } from "react-icons/fa";
import { DiJqueryLogo, DiMysql, DiMongodb } from "react-icons/di";





class Skills extends Component {
    state = {}
    render() {
        return (<div className='skills'>
            <div className='skills-content'>
                <Fade bottom>
                    <div style={{ disply: "flex", justifyContent: "space-around" }}>
                        <DiMongodb size={80} />    <FaCss3Alt size={80} /> <FaHtml5 size={80} />  <FaJsSquare size={80} /> <FaReact size={80} /> <FaNode size={80} /> <FaDatabase size={80} /> <DiJqueryLogo size={80} /> <DiMysql size={80} />


                    </div>
                </Fade>
            </div>


        </div>);
    }
}

export default Skills;