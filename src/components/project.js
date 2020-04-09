import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import ReactCardFlip from 'react-card-flip';


class Project extends Component {
    state = {
        isFlipped: false
    }

    handleClick = (e) => {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="vertical">

                <Fade bottom>
                    <div onClick={this.handleClick} className='project'>
                        <a href={this.props.url}>
                            <img src={this.props.imageSrc} alt={this.props.title}></img>
                        </a>
                        <h1>{this.props.title}</h1>
                        <span>{this.props.service}</span>
                    </div>
                </Fade>

                <Fade bottom>

                    <div className='project card' style={{ width: "18rem" }}>
                        {/* <img src="..." class="card-img-top" alt="..."> */}
                        <div className="card-body">
                            <h5 className="card-title">{this.props.title}</h5>
                            <p className="card-text">{this.props.service}.</p>
                            <a href={this.props.url} className="btn btn-primary">Go to project</a>
                            <a href={this.props.GithubUrl} className="btn btn-primary">See the code</a>

                        </div>
                    </div>

                    {/* <div onClick={this.handleClick} className='project'> */}
                    {/* <a href={this.props.url}>
            <img src={this.props.imageSrc} alt={this.props.title}></img>
            </a> */}
                    {/* <h1>{this.props.title}</h1>
                        <a href={this.props.url}>{this.props.url}</a>
            <span>{this.props.service}</span>
        </div>  */}
                </Fade>

            </ReactCardFlip>
        );

    }
}

export default Project;