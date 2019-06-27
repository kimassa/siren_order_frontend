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
import * as SecureStore from 'expo-secure-store'

class KmScreen extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }

  state = {
    email: '',
    password: ''
  }

  async handleLogin() {
    const { email, password } = this.state;

    const newUser = {
      email,
      password
    }

    let response = await fetch('http://54.180.153.12:8000/user/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    });

    let responseJson = await response.json();
    let token = responseJson.access_token;
    // console.log(responseJson);

    await SecureStore.setItemAsync('access_token', token);

    const myToken = await SecureStore.getItemAsync('access_token');
    // console.log(myToken);
  }

  render () {
    return (
     <View style={styles.container}>
       <ScrollView>
       <View style={styles.wrapper}>
        <View style={styles.logoView}>
          <Image
            style={{ width: 70, height: 70, }}
            source={require('../Logo.png')}
          />
        </View>

        <View>
          <Text style={styles.greetingMsg}>
            {`안녕하세요.\n스타벅스입니다.`}
          </Text>
        </View>

        <View style={styles.loginMsg}>
          <Text style={{ color: 'gray' }}>회원 서비스 이용을 위해 로그인 해 주세요.</Text>
        </View>

        <View>
          <TextInput
            style={styles.inputBox}
            placeholder="아이디"
            value={this.state.email}
            onChangeText={(text) => this.setState({email: text})}
          />
          <TextInput
            style={styles.inputBox}
            placeholder="비밀번호"
            secureTextEntry= {true}
            value={this.state.password}
            onChangeText={(password) => this.setState({password})}
          />
        </View>

        <View style={styles.findUser}>
          <View style={{ borderRightWidth: 1, paddingRight: 10}}><Text>아이디 찾기</Text></View>
          <View style={{ borderRightWidth: 1, paddingRight: 10}}><Text>비밀번호 찾기</Text></View>
          <Text>회원가입</Text>
        </View>

      </View>

      <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
        <Text style={{ color: 'white', fontSize: 23, padding: 23 }}>로그인하기</Text>
      </TouchableOpacity>

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