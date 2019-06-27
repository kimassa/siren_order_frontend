import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Touchable from 'react-native-platform-touchable';

export default class WorkingListScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={_=>this._moveToPage('Yr')}>
          <View>
            <Text style={styles.optionText}>예리 - 매장목록</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={this._handlePressDocs}>
          <View>
            <Text style={styles.optionText}>예리 - noti</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Sj')}>
          <View>
            <Text style={styles.optionText}>승준</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Yhk')}>
          <View>
            <Text style={styles.optionText}>윤하</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Ss')}>
          <View>
            <Text style={styles.optionText}>성수</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Km')}>
          <View>
            <Text style={styles.optionText}>건모</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Km2')}>
          <View>
            <Text style={styles.optionText}>건모2</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Js')}>
          <View>
            <Text style={styles.optionText}>진세</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Sy')}>
          <View>
            <Text style={styles.optionText}>소연</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Yhp')}>
          <View>
            <Text style={styles.optionText}>연하</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Hs')}>
          <View>
            <Text style={styles.optionText}>현승</Text>
          </View>
        </Touchable>

        <Touchable
          style={styles.option}
          background={Touchable.Ripple('#ccc', false)}
          onPress={e => this._moveToPage('Sd')}>
          <View>
            <Text style={styles.optionText}>매장상세</Text>
          </View>
        </Touchable>
      </ScrollView>
    );
  }

  _moveToPage = (pageName) => {
    this.props.navigation.navigate(pageName);
  }
}

WorkingListScreen.navigationOptions = {
  title: '구현목록',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  option: {
    backgroundColor: '#fdfdfd',
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#EDEDED',
  },
});
