import React, { Component } from 'react';
import { 
  View, 
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { CheckBox, Button } from 'react-native-elements';

class KmScreen extends Component {

  state = {
    isAgreed: false,
    name: '',
    birthday: '',
  }

  render () {
    return (
      <View style={styles.container}>
          <View style={styles.wrapper}>
            <View style={styles.header}>
              <Text style={styles.mainParagraph}>
                {`본인확인을 위해\n인증을 진행해 주세요`}
              </Text>
            </View>
          {/* checkbox가 안드로이드와 ios가 달라 분기점이 필요함 */}
          <CheckBox
              title='본인 인증 서비스 약관 전체동의'
              checkedIcon='dot-circle-o'
              uncheckedIcon='circle-o'
              checked={this.state.isAgreed}
              onPress={() => this.setState({isAgreed: !this.state.isAgreed})}
              containerStyle={{ backgroundColor: "transparent", borderColor: "transparent" }}
          />

          <View style={styles.listParagraph}>
            <Text style={{ padding: 5 }}>
              휴대폰 본인 인증 서비스 이용약관 동의(필수)
            </Text>
            <Text style={{ padding: 5 }}>
              휴대폰 통신사 이용약관 동의(필수)
            </Text>
            <Text style={{ padding: 5 }}>
              개인정보 제공 및 이용 동의(필수)
            </Text>
            <Text style={{ padding: 5 }}>
              고유식별정보 처리(필수)
            </Text>
          </View>

          <Button
            style={{ backgroundColor: "#C0C0C0", color: "white" }}
            title="다음"
          />
          
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1
  },
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: "lightblue"
  },
  mainParagraph: {
    fontSize: 25,
  },
  header : {
    marginBottom: 20
  },
  listParagraph : {
    paddingBottom: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#C0C0C0"
  }
});

export default KmScreen;