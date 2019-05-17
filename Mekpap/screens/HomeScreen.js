import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { LinearGradient, Font } from 'expo';

export default class HomeScreen extends React.Component {
  state = {
    fontLoaded: false
  }
  static navigationOptions = {
    header: null,
  };
  async componentDidMount() {
    await Font.loadAsync({
      'raleway': require('../assets/fonts/Raleway-Light.ttf'),
    });

    this.setState({fontLoaded: true})
  }

  render() {
    return (
      <View style={styles.container}>
          <LinearGradient
             colors={['rgba(0,72,111,1)', 'rgba(42,136,136,0.8)']}
             start={{x: 0, y: 0.5}} 
             end={{x: 1, y: 0.5}}
             style={{
               flex: 1,
               justifyContent: 'center',
               paddingTop: 50,
             }}  
          >
          <ScrollView>
            <Text
              style={{
                marginVertical: 10,
                fontSize: 34,
                color: '#fff',
                fontWeight: '100',
                textAlign: 'center',
                // fontFamily: 'raleway',
              }} 
            >
              Nice to see you back,
            </Text>
            <Text
              style={{
                marginVertical: 50,
                fontSize: 40,
                color: '#fff',
                fontWeight: '100',
                textAlign: 'center',
                // fontFamily: 'raleway',
              }} 
            >
              Kennedy
            </Text>
            <TextInput
              style={{
                height: 40,
                borderColor: 'white', 
                borderWidth: 1,
                paddingHorizontal: 10, 
                marginLeft: 30,
                borderRadius: 7, 
                marginRight: 30}}
              // onChangeText={(text) => this.setState({text})}
              // value={this.state.text}
                placeholder = "Eg. Car Won't Start"
            />
          </ScrollView>
          </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
    justifyContent: 'center',
  },
  getStartedText: {
    alignItems: 'center',
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
});
