import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const Discover = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView className="pt-14 pl-[1px] flex-1 bg-white relative">
      <TouchableOpacity
        onPress={()=>{
          navigation.navigate("Home");
        }}>
        <Text className="text-xl text-[#00BCC9]">👈Back</Text>
      </TouchableOpacity>
      
      <View className="flex-row items-center justify-between pl-2">
          <View>
            <Text className="text-[35px] text-[#0B646B] font-bold">Discover</Text>
            <Text className="text-[#527283] text-[33px] pb-4">the beauty today</Text>
         </View>
         <View className="w-[50px] h-[50px] bg-gray-400 rounded-md items-center justify-center shadow-lg">
            <Image 
              source={require("../assets/Avatar.png")}
              className="w-full h-full rounded-md object-cover"
            />


          </View> 
      </View>
    </SafeAreaView>
  )
}

export default Discover