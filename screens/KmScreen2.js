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

class KmScreen2 extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  state = {
    name : '',
    email : '',
    password : '',
    phone : ''
  }

  async handleSubmit() {
    const { name, email, password, phone } = this.state;

    const newUser = {
      name,
      email,
      password,
      phone
    }

    console.log(newUser);

    let response = await fetch('http://54.180.153.12:8000/user/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    let responseJson = await response.json();
    console.log(responseJson);
  }

  render () {

    const { name, email, password, phone } = this.state;

    return (
     <View style={styles.container}>
       <ScrollView>
       <View style={styles.wrapper}>

        <View style={styles.logoView}>
          <Image
            style={{ width: 70, height: 70 }}
            source={require('../Logo.png')}
          />
        </View>

        <View style={styles.signupMsg}>
          <Text style={{ color: 'gray' }}>서비스 이용을 위해 회원가입을 해 주세요.</Text>
        </View>

        <View>
          <TextInput
            style={styles.inputBox}
            placeholder="이름"
            value={name}
            onChangeText={(text) => this.setState({name: text})}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="이메일"
            value={email}
            onChangeText={(text) => this.setState({email: text})}
          />
          <TextInput
            style={styles.inputBox}
            secureTextEntry={true}
            placeholder="비밀번호"
            value={password}
            onChangeText={(text) => this.setState({password: text})}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="전화번호"
            value={phone}
            onChangeText={(text) => this.setState({phone: text})}
          />
        </View>
      </View>

        <TouchableOpacity style={styles.button} onPress={this.handleSubmit}>
          <Text style={{ color: 'white', fontSize: 23, padding: 23 }}>회원가입하기</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
    )
  }
}

KmScreen2.navigationOptions = {
  //header: null,
  title: '회원가입',
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
  wrapper : {
    padding: 50,
  },
  logoView : {
    alignItems: 'center',
    marginTop: 50,
    marginBottom: 20,
  },
  signupMsg : {
    fontSize: 20,
    marginBottom: 120,
    alignItems: 'center'
  },
  inputBox : {
    marginBottom: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3CB371'
  },
});

export default KmScreen2;