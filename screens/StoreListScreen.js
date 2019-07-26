import React, { Component } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  FlatList
} from 'react-native';
import { ListItem } from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation';
import StoreMapScreen from './StoreMapScreen';

class StoreListScreen extends Component {
  
  state = {
    storeList: []
  };
  
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(async position => {
      console.log(position)
        const res = await fetch(`http://54.180.153.12:8000/supplier/location?lon=${position.coords.longitude}&lat=${position.coords.latitude}`);
        const result = await res.json();
        
        this.setState({
          storeList: result
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }
  
  render() {
    const {
      storeList
    } = this.state;
    
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>
          <Text style={styles.optionsTitleText}>매장선택</Text>
          
          <FlatList
            style={{}}
            data={storeList}
            renderItem={({ item }) => (
              <ListItem
                key={item.supplier_id}
                title={item.branch}
                storeId={item.supplier_id}
                subtitle={item.address}
                rightSubtitle={parseInt(item.distance)+' m'}
                containerElement={TouchableHighlight}
                containerStyle={{ borderBottomColor: '#ddd', borderBottomWidth: 1 }}
                onPress={e=>this.props.navigation.navigate('Sd', { storeId: item.supplier_id })}
              />
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </ScrollView>
      </View>
    )
  }
}

StoreListScreen.navigationOptions = {
  // header: null,
  title: '매장목록'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  optionsTitleText: {
    fontSize: 16,
    marginLeft: 15,
    marginTop: 9,
    marginBottom: 12,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
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
        shadowOffset: { width: 0, height: -3 },
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
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

const MyNavigator = createMaterialTopTabNavigator({
  Home: StoreListScreen,
  StoreMap: StoreMapScreen
}, {
  animationEnabled: false,
  swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'rgb(12,157,197)',
    inactiveTintColor: 'black',
    indicatorStyle: {
      backgroundColor: 'rgb(102,134,205)',
    },
    labelStyle: {
      color: 'tomato',
    },
    tabStyle: {
      height: 48,
      alignItems: 'center',
      justifyContent: 'center',
    },
    style: {
      backgroundColor: 'white',
    },
    statusBarStyle: 'light-content',
  }
});

MyNavigator.navigationOptions = ({ navigation, screenProps }) => ({
  header: null,
  headerMode: 'none',
  tabBarVisible: true,
  tabBarLabel: () => {
    const { routeName } = navigation.state;
    switch (routeName) {
      //
    }
    return <Text>{routeName}</Text>;
  },
});

class Page extends Component {
  static router = MyNavigator.router;
  render() {
    return (
      <MyNavigator
        navigation={this.props.navigation}
      />
    );
  }
}

export default Page;
