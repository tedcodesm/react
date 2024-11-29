import { View, Text,Image,TouchableOpacity, Pressable, } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler';
// import { Icon } from 'react-native-vector-icons/Icon';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";


const DetailScreen = ({navigation,route}) => {
  const {productname,productprice,productimage,productdescription} = route.params;
  return (
    <View className="items-start justify-start space-y-4">
      <Image className="w-full object-fit h-[60%] rounded-b-xl" source={productimage}/>
      <Pressable 
      onPress={() =>navigation.goBack()}
      className="absolute top-10 bg-orange-500 h-10 rounded-full w-10 left-5 justify-center items-center">
        <Icon className="" name="chevron-left" size={24} color="white" />
      </Pressable>
      <ScrollView vertical={true}>

      <View className=" flex-row px-4 justify-between items-center  ">
      <View>
      <Text className="text-black font-bold text-2xl">{productname}</Text>
      <Text className="text-black font-semibold text-xl">KES. {productprice}</Text>
      </View>
      <View className="flex-row items-center justify-center">
      <Icon name="star" size={24} color="#FDDA0D" />
      <Icon name="star" size={24} color="#FDDA0D" />
      <Icon name="star" size={24} color="#FDDA0D" />
      <Icon name="star" size={24} color="#FDDA0D" />
      <Icon name="star" size={24} color="#B2BEB5" />
      <Text className="text-orange-400 px-1 text-xl font-semibold">4.0</Text>
      </View>
      </View>
      
      <View className="items-start px-4 justify-between w-[95%] flex-row py-4">
        <View className="items-start justify-start">
          <Text className="font-semibold text-lg">Size:</Text>
        </View>
        <View className="flex-row justify-evenly  items-center space-x-4" >
          <TouchableOpacity className="px-2 bg-neutral-100 py-1 text-gray-800 rounded-md shadow-lg  shadow shadow-gray-600">
            <Text className="text-gray-400 font-semibold">6</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 bg-neutral-100 py-1 text-gray-800 rounded-md shadow-lg  shadow shadow-black">
            <Text className="text-gray-400 font-semibold">7</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 bg-neutral-100 py-1 text-gray-800 rounded-md shadow-lg  shadow shadow-black">
            <Text className="text-gray-400 font-semibold">8</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-2 bg-neutral-100 py-1 text-gray-800 rounded-md shadow-lg  shadow shadow-black">
            <Text className="text-gray-400 font-semibold">9</Text>
          </TouchableOpacity>
          <TouchableOpacity className="px-1 bg-neutral-100 py-1 text-gray-800 rounded-md shadow-lg  shadow shadow-black">
            <Text className="text-gray-400 font-semibold">10</Text>
          </TouchableOpacity>
        </View>
      </View>
 
      <View className="justify-between px-4 items-center flex-row space-x-4 py-2">
           <TouchableOpacity className="px-5 bg-orange-500 py-1 text-gray-800 rounded-full shadow-lg  shadow shadow-black">
           <Text className="text-white text-center">Description</Text>
          </TouchableOpacity>
           <TouchableOpacity className="px-5 bg-neutral-200 py-1 text-gray-800 rounded-full shadow-lg  shadow shadow-black">
            <Text className="text-gray-400">Specifications</Text>
          </TouchableOpacity>
           <TouchableOpacity className="px-5 bg-neutral-200 py-1 text-gray-800 rounded-full shadow-lg  shadow shadow-black">
            <Text className="text-gray-400">Reviews</Text>
          </TouchableOpacity>
      </View>
      <View className=" flex-col px-4 justify-start items-start  py-4">
      <Text className="text-black font-semibold text-sm">{productdescription}</Text>
      </View>
      <View  className=" justify-center items-center py-4">
      <TouchableOpacity 
     onPress={()=>navigation.navigate('')} 
      className="w-[80%]  items-center justify-center py-2  bg-orange-500 rounded-xl">
        <Text className="text-white text-center">Add to Cart</Text>
      </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  )
}

export default DetailScreen