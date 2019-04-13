import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt, faCheck } from '@fortawesome/free-solid-svg-icons'
import MapContainer from './Map';

import '../assets/register.css'

export default class Congrats extends Component{
    constructor(){
        super();
        this.state = {
            toChild: false
        }
    }

    renderChild() {
        this.setState({
            toChild: true,
        });
    }

    render(){
        if(this.state.toChild == false) {
            return(
                
                <div className="selecttime">
                    <h1 className="logo-title">
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                SafeLy
                    </h1>
                    <div className="module">
                        <div className="instruction">
                            Select your desired time to leave.
                                We will find a buddy to leave with you
                        </div>
                        <div className="sml-container">
                            <h3>Congratulation!</h3>
                            <div className="userList">
                                <div className="user"></div>
                                <div className="user"></div>
                                <div className="user"></div>
                            </div>

                            <h3 className="blueTheme">These are your buddies :)</h3>
                            
                        <button className="centerbtn success">
                            <FontAwesomeIcon icon={faCheck}/>
                        </button>
                        </div>
                        <div className="sml-container-rnd">
                            <h4>We're finding the nearest meet up place</h4>
                        </div>
                    </div>
                    <MapContainer/>
                </div>
            )
        }
        else {
            return React.cloneElement(React.Children.only(this.props.children), {});
        }
    }
}

