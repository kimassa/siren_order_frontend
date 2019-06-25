import React from 'react';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import SjScreen from '../screens/SjScreen';
import YhkScreen from '../screens/YhkScreen';
import SsScreen from '../screens/SsScreen';
import KmScreen from '../screens/KmScreen';
import KmScreen2 from '../screens/KmScreen2';
import JsScreen from '../screens/JsScreen';
import SyScreen from '../screens/SyScreen';
import YhpScreen from '../screens/YhpScreen';
import HsScreen from '../screens/HsScreen';

const HeaderOptions = {

};

const SjStack = createStackNavigator({
  Sj: SjScreen,
});

const YhkStack = createStackNavigator({
  Yhk: YhkScreen,
});

const SsStack = createStackNavigator({
  Ss: SsScreen,
});

const KmStack = createStackNavigator({
  Km: KmScreen,
});

const KmStack2 = createStackNavigator({
  Km2: KmScreen2,
});

const JsStack = createStackNavigator({
  Js: JsScreen,
});

const SyStack = createStackNavigator({
  Sy: SyScreen,
});

const YhpStack = createStackNavigator({
  Yhp: YhpScreen,
});

const HsStack = createStackNavigator({
  Hs: HsScreen,
});

export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Sj: SjStack,
    Yhk: YhkStack,
    Ss: SsStack,
    Km: KmStack,
    Km2: KmScreen2,
    Js: JsStack,
    Sy: SyStack,
    Yhp: YhpStack,
    Hs: HsStack
  })
);
