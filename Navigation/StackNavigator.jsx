import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import SplashScreen from '../screens/SplashScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SigninScreen from '../screens/SigninScreen';
import BottomNavigator from './BottomNavigator';
import DetailScreen from '../screens/DetailScreen';


const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Splash" component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}} />
        <Stack.Screen name="signin" component={SigninScreen} options={{headerShown:false}} />
        <Stack.Screen name="landing" component={BottomNavigator} options={{headerShown:false}} />
        <Stack.Screen name="detail" component={DetailScreen} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigator