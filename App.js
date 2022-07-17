import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Profile from './screens/profile/Profile';
import SignIn from './screens/preAuth/signIn/SignIn';
import SignUp from './screens/preAuth/signUp/SignUp';
import SignUpEmail from './screens/preAuth/signUp/SignUpEmail'
import Welcome from './screens/Welcome';
import Home from './screens/Home';
import Risk from './screens/settings/Risk';
import Deposit from './screens/settings/Deposit';
import Design from './screens/portfolio/Design';
import Building from './screens/portfolio/Building';
import PersonalInfo from './screens/profile/PersonalInfo';

export default function App() {
  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator()

  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{drawerPosition : "right"}}>
        <Drawer.Screen name="welcome" component={Welcome} options={{headerShown: false, swipeEnabled: false, drawerItemStyle: { height: 0 }}} />
        <Drawer.Screen name="signIn" component={SignIn} options={{headerShown: false ,swipeEnabled: false, drawerItemStyle: { height: 0 }}}/>
        <Drawer.Screen name="signUp" component={SignUp} options={{headerShown: false ,swipeEnabled: false, drawerItemStyle: { height: 0 }}}/>
        <Drawer.Screen name="signUpEmail" component={SignUpEmail} options={{headerShown: false ,swipeEnabled: false, drawerItemStyle: { height: 0 }}}/>
        <Drawer.Screen name="home" component={Home} options={{headerShown: false, swipeEnabled: false}}/>
        <Drawer.Screen name="risk" component={Risk} options={{headerShown: false, swipeEnabled: false}}/>
        <Drawer.Screen name="deposit" component={Deposit} options={{headerShown: false, swipeEnabled: false}}/>
        <Drawer.Screen name="design" component={Design} options={{headerShown: false, swipeEnabled: false}}/>
        <Drawer.Screen name="building" component={Building} options={{headerShown: false, swipeEnabled: false}}/>
        <Drawer.Screen name="profile" component={Profile} options={{headerShown: false, swipeEnabled: false}}/>
        <Drawer.Screen name="personal info" component={PersonalInfo} options={{headerShown: false, swipeEnabled: false, drawerItemStyle: { height: 0 }}}/>
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
