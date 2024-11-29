import { View, Text ,TouchableOpacity ,Image , Pressable , TextInput  } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';


const LoginScreen = () => {
  return (
    <LinearGradient className="flex-1  items-center justify-center px-4 " colors={['blue', 'red']}>

    {/* <View className="flex-1 items-center justify-center px-4 "   > */}

      <Image className="w-[200px] h-[200px] " source={require('../assets/password.png')}/>
<View className="w-full space-y-2 ">
  <Text className="font-semibold text-3xl tracking-wide">Log In</Text>
 
  <View className="w-full space-y-2">
    <Text className="text-sm text-neutral-500">Email</Text>
   <TextInput className="w-full h-10 rounded-lg border border-neutral-400 px-4" placeholder='Enter email' />
  </View>

  <View className="w-full space-y-2">
    <Text className="text-sm text-neutral-500">Password</Text>
   <TextInput className="w-full h-10 rounded-lg border border-neutral-400 px-4" secureTextEntry placeholder='Enter password' />
  </View>
  <View className="px-1 w-full top-5 ">
    <TouchableOpacity
    onPress={()=>navigation.navigate("")}
    className="w-full items-center justify-center h-10  bg-blue-400 rounded-lg text-white font-semibold text-sm tracking-wide">
      <Text className="text-white font-bold tracking-wider text-lg">Log in</Text>
    </TouchableOpacity>
  </View>
  </View> 
    {/* </View> */}
    </LinearGradient>
  )
}

export default LoginScreen