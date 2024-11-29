import { View, Text,Pressable,TouchableOpacity,Image,TextInput,ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const cartscreen = () => {
  return (
    <View className="flex-1 justify- pt-8 px-4 items- flex-col  ">
      <View className="items-center  justify-between px-4 flex-row">
        <Icon  name="chevron-left" size={30} color="black"/>
        <Icon name="bell-outline" size={20} color="black"/>
      </View>
              {/* search input */}
              <View className="w-full py-4  justify-between flex-row items-center space-x-6">
          <View className="w-[80%]">
            <TextInput
              placeholder="Search "
              className="border-2 border-gray-200 h-10 bg-white relative w-full px-4 py-2 rounded-full"
            />
          </View>
          <View className=" ">
            <TouchableOpacity className="rounded-xl w-10 h-10 bg-orange-300 items-center justify-center ">
              <Icon name="currency-eth" size={24} color="orange" />
            </TouchableOpacity>
          </View>
        </View>
        <Text className="font-bold text-2xl ">Wishlist</Text>
      
      {/* start of card */}
      <ScrollView className=" w-full" showsVerticalScrollIndicator={false} vertical={true}>
        <View className="space-y-4 py-2">
        <View className="w-full shadow-md border border-gray-100 shadow-gray-300 py-1 bg-white flex-row items-center rounded-xl ">
          <View className=" rounded-xl bg-gray-100 px-1 flex items-center justify-center">
            <Image className="rounded-md w-20 h-28 " source={require('../assets/shoe1.jpg')} />
          </View>
          <View className="flex-1 px-4">
            <Text className="font-bold text-xl">Product Name</Text>
            <Text className="text-gray-600">Product Description</Text>
            <Text className="text-black font-bold text-xl ">$2435.68</Text>
          </View>
          
          <Pressable className="w-[1/5] px-4 flex rounded-full py-1 bottom-5  bg-orange-500 absolute right-2">
            <Text className="font-bold text-white  text-xl">Add to cart</Text>
          </Pressable>
        </View>
        <View className="w-full shadow-md border border-gray-100 shadow-gray-300 py-1 bg-white flex-row items-center rounded-xl ">
          <View className=" rounded-xl bg-gray-100 px-1 flex items-center justify-center">
            <Image className="rounded-md w-20 h-28 " source={require('../assets/shoe2.jpg')} />
          </View>
          <View className="flex-1 px-4">
            <Text className="font-bold text-xl">Product Name</Text>
            <Text className="text-gray-600">Product Description</Text>
            <Text className="text-black font-bold text-xl ">$2435.68</Text>
          </View>
          
          <Pressable className="w-[1/5] px-4 flex rounded-full py-1 bottom-5  bg-orange-500 absolute right-2">
            <Text className="font-bold text-white  text-xl">Add to cart</Text>
          </Pressable>
        </View>
        <View className="w-full shadow-md border border-gray-100 shadow-gray-300 py-1 bg-white flex-row items-center rounded-xl ">
          <View className=" rounded-xl bg-gray-100 px-1 flex items-center justify-center">
            <Image className="rounded-md w-20 h-28 " source={require('../assets/sambas.jpeg')} />
          </View>
          <View className="flex-1 px-4">
            <Text className="font-bold text-xl">Product Name</Text>
            <Text className="text-gray-600">Product Description</Text>
            <Text className="text-black font-bold text-xl ">$2435.68</Text>
          </View>
          
          <Pressable className="w-[1/5] px-4 flex rounded-full py-1 bottom-5  bg-orange-400 absolute right-2">
            <Text className="font-bold text-white  text-xl">Add to cart</Text>
          </Pressable>
        </View>
        <View className="w-full shadow-md border border-gray-100 shadow-gray-300 py-1 bg-white flex-row items-center rounded-xl ">
          <View className=" rounded-xl bg-gray-100 px-1 flex items-center justify-center">
            <Image className="rounded-md w-20 h-28 " source={require('../assets/aiforce.jpg')} />
          </View>
          <View className="flex-1 px-4">
            <Text className="font-bold text-xl">Product Name</Text>
            <Text className="text-gray-600">Product Description</Text>
            <Text className="text-black font-bold text-xl ">$2435.68</Text>
          </View>
          
          <Pressable className="w-[1/5] px-4 flex rounded-full py-1 bottom-5  bg-orange-400 absolute right-2">
            <Text className="font-bold text-white  text-xl">Add to cart</Text>
          </Pressable>
        </View>
        <View className="w-full shadow-md border border-gray-100 shadow-gray-300 py-1 bg-white flex-row items-center rounded-xl ">
          <View className=" rounded-xl bg-gray-100 px-1 flex items-center justify-center">
            <Image className="rounded-md w-20 h-28 " source={require('../assets/airmax.jpg')} />
          </View>
          <View className="flex-1 px-4">
            <Text className="font-bold text-xl">Product Name</Text>
            <Text className="text-gray-600">Product Description</Text>
            <Text className="text-black font-bold text-xl ">$2435.68</Text>
          </View>
          
          <Pressable className="w-[1/5] px-4 flex rounded-full py-1 bottom-5  bg-orange-400 absolute right-2">
            <Text className="font-bold text-white  text-xl">Add to cart</Text>
          </Pressable>
        </View>
        <View className="w-full shadow-md border border-gray-100 shadow-gray-300 py-1 bg-white flex-row items-center rounded-xl ">
          <View className=" rounded-xl bg-gray-100 px-1 flex items-center justify-center">
            <Image className="rounded-md w-20 h-28 " source={require('../assets/nike.jpg')} />
          </View>
          <View className="flex-1 px-4">
            <Text className="font-bold text-xl">Product Name</Text>
            <Text className="text-gray-600">Product Description</Text>
            <Text className="text-black font-bold text-xl ">$2435.68</Text>
          </View>
          
          <Pressable className="w-[1/5] px-4 flex rounded-full py-1 bottom-5  bg-orange-400 absolute right-2">
            <Text className="font-bold text-white  text-xl">Add to cart</Text>
          </Pressable>
        </View>
        <View className="w-full shadow-md border border-gray-100 shadow-gray-300 py-1 bg-white flex-row items-center rounded-xl ">
          <View className=" rounded-xl bg-gray-100 px-1 flex items-center justify-center">
            <Image className="rounded-md w-20 h-28 " source={require('../assets/j4.jpg')} />
          </View>
          <View className="flex-1 px-4">
            <Text className="font-bold text-xl">Product Name</Text>
            <Text className="text-gray-600">Product Description</Text>
            <Text className="text-black font-bold text-xl ">$2435.68</Text>
          </View>
          
          <Pressable className="w-[1/5] px-4 flex rounded-full py-1 bottom-5  bg-orange-400 absolute right-2">
            <Text className="font-bold text-white  text-xl">Add to cart</Text>
          </Pressable>
        </View>
        <View className="w-full shadow-md border border-gray-100 shadow-gray-300 py-1 bg-white flex-row items-center rounded-xl ">
          <View className=" rounded-xl bg-gray-100 px-1 flex items-center justify-center">
            <Image className="rounded-md w-20 h-28 " source={require('../assets/sports.jpeg')} />
          </View>
          <View className="flex-1 px-4">
            <Text className="font-bold text-xl">Product Name</Text>
            <Text className="text-gray-600">Product Description</Text>
            <Text className="text-black font-bold text-xl ">$2435.68</Text>
          </View>
          
          <Pressable className="w-[1/5] px-4 flex rounded-full py-1 bottom-5  bg-orange-400 absolute right-2">
            <Text className="font-bold text-white  text-xl">Add to cart</Text>
          </Pressable>
        </View>
        </View>
        </ScrollView>
        {/* end of cards */}
    </View>
  )
}

export default cartscreen