import React, { Component } from 'react';
import Project from './Project';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Work extends Component {
    state = {  }
    render() { 
        return (<div>
        <h1 className='heading'>
        <Fade bottom cascade>Work.</Fade></h1>
        <div className='work-content'>
                {data.Projects.map((Project)=>(
                    <Project key={Project.id}
                             title = {Project.title}
                             service = {Project.service}
                             imageSrc = {Project.imageSrc}
                             url={Project.url}
                     ></Project>
                ))}
        </div>
        </div>  );
    }
}
 
export default Work;