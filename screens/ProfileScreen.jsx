import { View, Text, ImageBackground ,Image,Pressable,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const ProfileScreen = () => {
  return (
    <View className="flex-1 justify-start  bg-neutral-200">
      <ImageBackground className="w-full h-80 object-fit " source={require('../assets/bg.jpg')}>
    <View className="items-center justify-end space-x-4 px-4 flex-row pt-10">
      <Icon  name="heart-outline" size={24} color={"white"}/>
      <Icon  name="shopping" size={24} color={"white"}/>
    </View>
    <View className="items-center justify-center flex-col space-y-7">
      <Image className="w-32 h-32 rounded-full" source={require('../assets/person10.jpeg')} />
      <Text className="text-white text-2xl font-bold">Miranda West</Text>
      <Text className="text-white text-sm ">Work hard in silence let your success be the noise</Text>
    </View>
      </ImageBackground>
      <ScrollView showsVerticalScrollIndicator={false} vertical={true} >
      <View className="flex-col justify-start rounded-md items-start px-4 py-4 w-full space-y-8">
        <View className="border border-gray-300 rounded-lg bg-white space-y-4 py-2  shadow shadow-lg shadow-gray-800">
         <View className="flex-row justify-between w-full px-2  border-b py-4 border-slate-200">
          <View className="items- justify-between flex-row ">
          <Icon  name="pin" size={24} color={"gray"}/>
          <Text className="text-neutral-500 text-lg">My Address</Text>
          </View>
          <View className="items- justify- flex-row">
          <Icon  name="chevron-right" size={24} color={"gray"}/>
          </View>
          </View>
         <View className="flex-row justify-between w-full px-2 ">
          <View className="items- justify-between flex-row">
          <Icon  name="account" size={24} color={"gray"}/>
          <Text className="text-neutral-500 text-lg"> Account</Text>
          </View>
          <View className="items- justify- flex-row">
          <Icon  name="chevron-right" size={24} color={"gray"}/>
          </View>
          </View>
          </View>
        <View className="border border-gray-300 rounded-lg bg-white space-y-8 py-4 shadow shadow-lg shadow-gray-800">
         <View className="flex-row justify-between w-full px-2 border-b py-4 border-slate-200">
          <View className="items- justify-between space-x-2 flex-row">
          <Icon  name="bell" size={24} color={"gray"}/>
          <Text className="text-neutral-500 text-lg">Notifications</Text>
          </View>
          <View className="items- justify- flex-row">
          <Icon  name="chevron-right" size={24} color={"gray"}/>
          </View>
          </View>
         <View className="flex-row justify-between w-full px-2 border-b py-2 border-slate-200">
          <View className="items- justify-between space-x-2 flex-row">
          <Icon  name="cellphone" size={24} color={"gray"}/>
          <Text className="text-neutral-500 text-lg"> Devices</Text>
          </View>
          <View className="items- justify- flex-row">
          <Icon  name="chevron-right" size={24} color={"gray"}/>
          </View>
          </View>
         <View className="flex-row justify-between w-full px-2 border-b py-2 border-slate-200">
          <View className="items- justify-between space-x-2 flex-row">
          <Icon  name="key" size={24} color={"gray"}/>
          <Text className="text-neutral-500 text-lg"> Password</Text>
          </View>
          <View className="items- justify- flex-row">
          <Icon  name="chevron-right" size={24} color={"gray"}/>
          </View>
          </View>
         <View className="flex-row justify-between w-full px-2 border-b py-2 border-slate-200">
          <View className="items- justify-between space-x-2 flex-row">
          <Icon  name="book" size={24} color={"gray"}/>
          <Text className="text-neutral-500 text-lg"> Language</Text>
          </View>
          <View className="items- justify- flex-row">
          <Icon  name="chevron-right" size={24} color={"gray"}/>
          </View>
          </View>
         <View className="flex-row justify-between w-full px-2 ">
          <View className="items- justify-between space-x-2 flex-row">
          <Icon  name="account" size={24} color={"gray"}/>
          <Text className="text-neutral-500 text-lg"> Account</Text>
          </View>
          <View className="items- justify- flex-row">
          <Icon  name="chevron-right" size={24} color={"gray"}/>
          </View>
          </View>
          </View>
      </View>
      </ScrollView>
    </View>
  )
}

export default ProfileScreen