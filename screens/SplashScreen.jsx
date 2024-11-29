import { StyleSheet, Text, View ,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const SplashScreen = ({navigation}) => {
  return (
    <View className="flex-1 justify-center items-center bg-yellow-300">
        <Image className="h-32 w-32" source={require('../assets/airplane.png')}/>
      <Text className="font-semibold text-2xl">Autonomous driving</Text>
      <View className="absolute w-full justify-center items-center bottom-12 px-5 space-y-2">
        <TouchableOpacity
        onPress={()=> navigation.navigate("signin")}
        className="border border-1 border-orange-400 justify-center  items-center h-10  w-full px-1 rounded-md text-green-500 font-semibold">
            <Text className="text-orange-400 green-400 font-semibold text-xl">Signin</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=>navigation.navigate("Login")}
        className=" bg-orange-400 justify-center  items-center h-10  w-full px-1 rounded-md text-green-500 font-semibold">
            <Text className="text-white font-semibold text-xl">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})