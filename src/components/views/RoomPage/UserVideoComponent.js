import React, { Component } from 'react';
import OpenViduVideoComponent from './OvVideo';
import './UserVideo.css';

export default class UserVideoComponent extends Component {

    getNicknameTag() {
        // Gets the nickName of the user
        return JSON.parse(this.props.streamManager.stream.connection.data).clientData;
    }

    render() {
        return (
            <div id="container">
                {this.props.streamManager !== undefined ? (
                    <div className="streamcomponent">
                        <div><p>{this.getNicknameTag()}</p></div>
                        <OpenViduVideoComponent streamManager={this.props.streamManager} />                    
                    </div>
                ) : null}
            </div>
        );
    }
}
