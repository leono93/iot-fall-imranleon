import React, { Component } from 'react';
import Chart from 'react-google-charts';
import firebase from "firebase";
import Firestore from './Firestore.js';

class PiWeather extends Component {
  constructor(props){
    super(props);
    this.state={
      weatherdata: []
    };
  }
  
  /*componentDidMount() {
    const db = firebase.firestore();
    db.collection("weatherdata")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        JSON.stringify(data);
        console.log(data);
        this.setState({ weatherdata: data });
      });
  }*/

  componentDidMount = () => {
    db.collection("weatherdata").get().then((snapshot) => (
        snapshot.forEach((doc) => (
            this.setState((prevState) => ({
                weatherdata: [...prevState.weatherdata, {
                    postID: doc.id,
                    title: doc.data().title,
                    body: doc.data().body,
                    featured: doc.data().featured
                }]
            }))
        ))
    ))
}

  render() {

      const db = firebase.firestore(); 
      db.collection("weatherdata")
      .get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => doc.data());
        console.log(data);
  }); 

    return (
      <div className="piweather">
      <h1>Information from Raspberry Pi Weather Station</h1>
      </div>
    );
  }
}

export default PiWeather;
