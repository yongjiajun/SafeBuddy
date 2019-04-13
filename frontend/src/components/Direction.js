import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLifeRing, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons'
import MapDirection from './MapDirection';

import '../assets/MapDirection.css'

export default class Direction extends Component{
    render() {
        return (
            <div className = "direction">
                <div className="sml-container-rnd top">
                    <h4>Please follow direction to the meet up point</h4>
                </div>
                <div className="btn-controller">
                    <button className="round-btn">  <FontAwesomeIcon icon={faLifeRing} /> SOS</button>
                    <button className="round-btn">  <FontAwesomeIcon icon={faTimes} /> Cancel</button>
                </div>
                <div className="bottomUI">
                    <button className="round-btn medium">I AM ARRIVED</button>
                    <div className="bottom-container">
                        <div className="status-container">
                            <div className="user">
                                <button className="user-checkbox">
                                <FontAwesomeIcon icon={faCheck}/></button>
                            </div>
                            <div className="status arrived">Arrived</div>
                        </div>
                        <div className="status-container">
                             <div className="user">
                                <button className="user-checkbox">
                                <FontAwesomeIcon icon={faCheck}/></button>
                            </div>
                            <div className="status arrived">Arrived</div>

                        </div>
                        <div className="status-container">
                            <div className="user">
                                <button className="user-checkbox">
                                <FontAwesomeIcon icon={faCheck}/></button>
                            </div>
                            <div className="status otw">On the way</div>
                        </div>
                    </div>
                    

                </div>
                <MapDirection
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpjsS_Dw5a70HuU5LXjVuQHjPmc7jxc4E"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    center={{ lat: -24.9923319, lng: 135.2252427 }}
                    zoom={9}
                />
            </div>
        )
    }
}