import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
// import * as Animatable from 'react-native-animatable';


const HomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);


  return (
    <SafeAreaView className="pt-14 pl-2 bg-white flex-1 relative">
      {/* first section */}
      <View className="flex-row px-3 mt-8 items-center space-x-2">
        <View className="w-16 h-16 bg-black rounded-full justify-center items-center">
          <Text className="text-[#4DABB7] text-2xl font-semibold">Go</Text>
        </View>
        <Text className="text-[#2A2B4B] text-3xl font-semibold">Travel</Text>
      </View>
      {/* second section */}
      <View className="px-3 mt-4 space-y-3 pb-10">
        <Text className="text-[#3C6072] text-[37px]">Enjoy the trip with</Text>
        <Text className="text-[#00BCC9] text-[35px] font-bold">Good Moments</Text>
        <Text className="text-[#3C6072] text-base">
          Plan your trip and enjoy every moment of your journey with your loved ones.
        </Text>
      </View>
      {/* circle section */}
      <View className="w-[370px] h-[370px] bg-[#00BCC9] rounded-full absolute bottom-[25px] right-[-160px]"></View>
      <View className="w-[370px] h-[370px] bg-[#E99265] rounded-full absolute bottom-[-140px] left-[-32px]"></View>
      {/* image container */}
      <View className="flex-1 relative items-center justify-center">
        <Image 
          source={require("../assets/travel.png")}
          style={{
            width: 600,
            height: 500,
            resizeMode: 'contain',
            marginBottom: -5,
          }}
        />
          <TouchableOpacity 
               onPress={() => {
                console.log("Navigate to Discover");
                navigation.navigate("Discover");
              }}
              className="absolute bottom-20 w-24 h-24 border-l-2 border-t-2 border-r-2 border-[#00BCC9] rounded-full
              items-center justify-center">
              <View 
                // animation={"pulse"} 
                // easing="ease-in-out" 
                // iterationCount={"infinity"}
                 className="w-20 h-20 items-center justify-center rounded-full bg-[#00BCC9]">
                <Text className='text-gray-50 text-[30px] font-semibold'>Go</Text>
              </View>
          </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  );
};

export default HomeScreen;
