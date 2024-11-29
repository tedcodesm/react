import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import cartscreen from '../screens/cartscreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{tabBarActiveTintColor:"orange"}}
    >
      <Tab.Screen
      options={{
        headerShown:false,
        tabBarLabel:"Home",
        tabBarIcon:({ focused,color,size }) => (
          <Icon name="home" size={30} color={focused? "orange":"gray"} />
        ),
      }}
      name="Home" component={HomeScreen} />
      <Tab.Screen
      options={{
        headerShown:false,
        tabBarLabel:"Cart",
        tabBarIcon:({ focused,color,size }) => (
          <Icon name="cart" size={30} color={focused? "orange":"gray"} />
        ),
      }}
      name="cart" component={cartscreen} />
      <Tab.Screen
      options={{
        headerShown:false,
        tabBarLabel:"Profile",
        tabBarIcon:({ focused,color,size }) => (
          <Icon name="account-circle" size={26} color={focused? "orange":"gray"} />
        ),
      }}
      name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default BottomNavigator

const styles = StyleSheet.create({})