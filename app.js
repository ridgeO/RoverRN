import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import api from './utilities/api.js';

export default class RoverRN extends Component {
  constructor(props){
    super(props);
    this.state = {
      rovers: []
    }
  }

  componentWillMount(){
    api.getRovers().then((response) => {
      this.setState({
        rovers: response.rovers
      })
    });
  }

  render() {
    console.log(this.state.rovers)
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to RoverRN!
        </Text>
        <Text style={styles.instructions}>
          Ok, get Roving!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RoverRN', () => RoverRN);
