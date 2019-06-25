import React from 'react';
import { Platform } from 'react-native';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import WorkingListScreen from '../screens/WorkingListScreen';
import SettingsScreen from '../screens/SettingsScreen';
import SjScreen from '../screens/SjScreen';
import YhkScreen from '../screens/YhkScreen';
import SsScreen from '../screens/SsScreen';
import KmScreen from '../screens/KmScreen';
import JsScreen from '../screens/JsScreen';
import SyScreen from '../screens/SyScreen';
import YhpScreen from '../screens/YhpScreen';
import HsScreen from '../screens/HsScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: '주문',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios' ? 'ios-beer' : 'md-beer'
      }
    />
  ),
};

const WorkingListStack = createStackNavigator({
  WorkingList: WorkingListScreen,
  Sj: SjScreen,
  Yhk: YhkScreen,
  Ss: SsScreen,
  Km: KmScreen,
  Js: JsScreen,
  Sy: SyScreen,
  Yhp: YhpScreen,
  Hs: HsScreen
});

WorkingListStack.navigationOptions = {
  tabBarLabel: '구현목록',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-list-box' : 'md-list-box'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: '설정',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  WorkingListStack,
  SettingsStack,
});
