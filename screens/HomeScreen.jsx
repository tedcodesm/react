import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  Pressable,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
const windowheight = Dimensions.get("window").height;
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { StatusBar } from "expo-status-bar";
import { categories, filters, products } from "../consant";

const HomeScreen = ({navigation}) => {
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <View
        className="bg-orange-500 space-y-10 w-full rounded-b-2xl px-4 py-20 "
        style={{ height: windowheight * 0.3 }}
      >
        <View className="w-full justify-between items-center flex-row">
          <View>
            <Text className="text-white">Location</Text>
            <View className="flex-row items-center space-x-1">
              <Icon name="map-marker-radius" size={24} color="#fff" />
              <Text className="text-white">New York, USA</Text>
              <Icon name="chevron-down" size={24} color="#fff" />
            </View>
          </View>
          <View>
            <TouchableOpacity className="h-10 w-10 rounded-xl bg-orange-200 bg-opacity-50 justify-center items-center">
              <Icon name="bell" size={24} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {/* search input */}
        <View className="w-full py-4 justify-between flex-row items-center space-x-6">
          <View className="w-[80%]">
            <TextInput
              placeholder="Search "
              className="border-2 border-white h-10 bg-white relative w-full px-4 py-2 rounded-md"
            />
          </View>
          <View className=" ">
            <TouchableOpacity className="rounded-xl w-10 h-10 bg-orange-300 items-center justify-center ">
              <Icon name="currency-eth" size={24} color="orange" />
            </TouchableOpacity>
          </View>
        </View>
      </View>



      <ScrollView vertical={true}>
      <View className="justify-between items-center flex-row px-4 py-4">
        <Text className="text-black font-bold text-lg">#Special </Text>
        <Text className="text-neutral-500 font-bold text-sm">See all</Text>
      </View>

      {/* cards */}
      <View className="w-full">
        <ScrollView
          className="px-4 space-x-4"
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          <Image
            className="w-80 h-32 object-cover   rounded-md"
            source={require("../assets/4.jpg")}
          />
          <Image
            className="w-80 h-32  object-cover rounded-md"
            source={require("../assets/3.jpg")}
          />
          <Image
            className="w-80 h-32  object-cover rounded-md"
            source={require("../assets/2.jpg")}
          />
          <Image
            className="w-80 h-32  object-cover rounded-md"
            source={require("../assets/1.jpg")}
          />
        </ScrollView>
      </View>
      <View className="justify-between items-center flex-row px-4 py-4">
        <Text className="text-black font-bold text-lg">Category </Text>
        <Text className="text-neutral-500 font-bold text-sm">See all</Text>
      </View>

      <View className="w-full justify-between flex-row items-center px-4">
        {categories.map((item) => {
          return (
            <View key={item.id} className="items-center">
              <Pressable className="h-14 w-14 justify-center items-center rounded-full bg-neutral-300">
                <Image className="h-8 w-8" source={item.image} />
              </Pressable>
              <Text className="text-neutral-600">{item.name}</Text>
            </View>
          );
        })}
      </View>
      <View className="justify-between items-center flex-row px-4 py-4">
        <Text className="text-black font-bold text-lg">Flash sale </Text>
        <Text className="text-neutral-500 font-bold text-sm">Closing in <Text className="text-orange-300">02 : 21 : 12</Text> </Text>
      </View>

      {/* filters */}
      <View className="w-full px-4">
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="space-x-4">
        {
          filters.map((filter)=>{
            return(
              <Pressable key={filter.id} className="border border-1 border-neutral-300 h-6 px-4 rounded-xl justify-center items-center">
          <Text className="text-neutral-500 font-semibold">{filter.name}</Text>
        </Pressable>
            )
          })
        }
        </ScrollView>
      </View>

      {/* flash sale */}

      <View className="w-full items-center flex-row justify-between px-4 py-5 flex-wrap space-y-3 space-x-1">
       {
        products.map((product)=>{
          return(
            <Pressable
            onPress={()=>navigation.navigate('detail',{
              productname:product.name,
              productprice:product.price,
              productimage:product.image,
              productdescription:product.description
            })}
            key={product.id} className="w-[48%] bg-white h-40 overflow-hidden shadow shadow-lg shadow-neutral-200 rounded-2xl">
            <View className="w-full h-[70%] justify-center items-center">
             <Image className="w-full object-fit h-full" source={product.image}/>
             </View> 
             <View className="w-full flex-row justify-between items-center px-4">
               <View> 
                 <Text className="text-xl font-semibold">{product.name}</Text>
                 <Text className="text-lg font-normal text-neutral-600">KES.{product.price}</Text>
               </View>
               <View>
                 <Pressable className="w-8 h-8 bg-orange-500 rounded-full justify-center items-center">
                   <Icon name="cart" size={24} color="white" />
                 </Pressable>
               </View>
             </View>
           </Pressable>
          )
        })

       }
      </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
