import React, { Component } from 'react';
import Chart from 'react-google-charts';
import firebase from 'firebase';
import 'firebase/firestore';

class PiWeather extends Component {

    constructor(){
        super();
        this.state = {
            timestamps: "Loading ...",
            temperature: "Loading ...",
            pressure: "Loading ...",
            timestamp4: "Loading ...",
            timestamp5: "Loading ...",
            timestamp6: "Loading ...",
            timestamp7: "Loading ...",
            timestamp8: "Loading ...",
            timestamp9: "Loading ..."
        }
    }

    componentDidMount(){
        const rootRef = firebase.database().ref();
        const timestampRef = rootRef.child('pressure');
        timestampRef.on('value', snap => {
            this.setState({
                timestamps: snap.val()
            });
        });
    }

    render() {
        return (
            <div className="piweather">
                <h1>Information from Raspberry Pi Weather Station</h1>
                  {this.state.timestamps} <br/>
            </div>
        );
    }
}

export default PiWeather;

