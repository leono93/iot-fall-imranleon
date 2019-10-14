import React, { Component } from 'react';
import Chart from 'react-google-charts';
import firebase from 'firebase';
import 'firebase/firestore';

class PiWeather extends Component {

    constructor(){
        super();
        this.state = {
            timestamp1: "Loading ...",
            timestamp2: "Loading ...",
            timestamp3: "Loading ...",
            timestamp4: "Loading ...",
            timestamp5: "Loading ...",
            timestamp6: "Loading ...",
            timestamp7: "Loading ...",
            timestamp8: "Loading ...",
            timestamp9: "Loading ...",
            timestamp10: "Loading ..."
        }
    }

    componentDidMount(){
        const rootRef = firebase.database().ref();
        const timestampRef = rootRef.child('timestamp1' && 'timestamp2');
        timestampRef.on('value', snap => {
            this.setState({
                timestamp1: snap.val(),
                timestamp2: snap.val()
            });
        });
    }

    render() {
        return (
            <div className="piweather">
                <h1>Information from Raspberry Pi Weather Station</h1>
                  {this.state.timestamp1} <br/>
                  {this.state.timestamp2} <br/>
                  {this.state.timestamp3} <br/>
                  {this.state.timestamp4} <br/>
                  {this.state.timestamp5} <br/>
                  {this.state.timestamp6} <br/>
                  {this.state.timestamp7} <br/>
                  {this.state.timestamp8} <br/>
                  {this.state.timestamp9} <br/>
                  {this.state.timestamp10} 
            </div>
        );
    }
}

export default PiWeather;