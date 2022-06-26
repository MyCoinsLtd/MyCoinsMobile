import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import SignIn from './screens/preAuth/signIn/SignIn';
import SignUp from './screens/preAuth/signUp/SignUp';
import SignUpEmail from './screens/preAuth/signUp/SignUpEmail'
import Welcome from './screens/Welcome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="welcome" component={Welcome} options={{headerShown: false}} />
        <Stack.Screen name="signIn" component={SignIn} options={{headerShown: false}}/>
        <Stack.Screen name="signUp" component={SignUp} options={{headerShown: false}}/>
        <Stack.Screen name="signUpEmail" component={SignUpEmail} options={{headerShown: false}}/>
      </Stack.Navigator>
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
