import React, { Component } from 'react';
import { 
  View, 
  Text,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

class KmScreen extends Component {

  render () {
    return (
     <View style={styles.container}>
       <ScrollView>
       <View style={styles.wrapper}>

       </View>
      </ScrollView>
    </View>
    )
  }
}

KmScreen.navigationOptions = {
  //header: null,
  title: '로그인',
  headerStyle: {
    backgroundColor: 'black',
  },
  headerTintColor: 'white',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container : {
    flex: 1,
  },
  wrapper: {
    padding: 50,
  },
  logoView : {
    alignItems: 'stretch',
    marginBottom: 20,
  },
  greetingMsg : {
    fontSize: 30,
    marginBottom: 20,
    alignItems: 'stretch',
  },
  loginMsg : {
    fontSize: 20,
    marginBottom: 150,
    alignItems: 'stretch',
  },
  inputBox : {
    backgroundColor: '#ffffff',
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  findUser : {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3CB371'
  },
});

export default KmScreen;