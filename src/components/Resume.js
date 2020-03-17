import React, { Component } from 'react';
import data from '../data';
import Fade from 'react-reveal/Fade';


// class Resume extends Component {
//     state = {}
//     render() {
//         return (<div> 
//             <h1>
//                 <Fade bottom cascade> Resume.</Fade>
//             </h1>
//             <fade bottom>
//                 <div className='contact-content'>

//                     <a target='_blank' rel="noopener noreferrer" href={data.social[1].url}>{data.social[1].name}</a>

//                 </div>

//             </fade>
//         </div>

//         )
//     }
// }

// export default Resume;


class Resume extends Component {
    state = {  }
    render() { 
        return (<div className='about'>
            <div className='about-content'>
            <h1><Fade bottom cascade>Resume.</Fade></h1>
            <Fade bottom>
                    <div className='contact-content'>
                        </div>
            </Fade>
            </div>
            <a target='_blank' rel="noopener noreferrer" href={data.social[1].url}>{data.social[1].name}</a>
            
</div>
        )}
}
 
export default Resume;