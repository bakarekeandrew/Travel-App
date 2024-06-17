import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MenuContainer from '../components/MenuContainer';
import { AntDesign } from '@expo/vector-icons';
import ItemCardContainer from '../components/ItemCardContainer';
import { getPlaceData } from '../api/Index';

interface Photo {
  images: {
    medium: {
      url: string;
    };
  };
}

interface Data {
  photo?: Photo;
  name?: string;
  location_string?: string;
}

const Discover = () => {
  const navigation = useNavigation();

  const [type, setType] = useState("Restaurants");
  const [isLoading, setIsLoading] = useState(false);
  const [mainData, setMainData] = useState<Data[]>([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setIsLoading(true);
    getPlaceData().then((data) => {
      setMainData(data);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    });
  }, []);

  return (
    <SafeAreaView className="pt-14 pl-[1px] flex-1 bg-white relative">
      <TouchableOpacity
        onPress={() => {
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

      <View className="flex-row items-center bg-gray mx-4 rounded-xl py-1 px-4 shadow-lg" style={{ elevation: 10 }}>
        <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'YOUR API KEY',
            language: 'en',
          }}
        />
      </View>

      {isLoading ? (
        <View className="flex-1 items-center justify-center mb-28">
          <ActivityIndicator size="large" color="#0B646B" />
        </View>
      ) : (
        <ScrollView>
          <View className="flex-row items-center justify-between px-8 mt-3">
            <MenuContainer 
              title="Hotels"
              ImageSrc={require("../assets/hotel.png")}
              type={type}
              setType={setType}
            />
            <MenuContainer 
              title="Attractions"
              ImageSrc={require("../assets/attractions.png")}
              type={type}
              setType={setType}
            />
            <MenuContainer 
              title="Restaurants"
              ImageSrc={require("../assets/restoImg.png")}
              type={type}
              setType={setType}
            />
          </View>

          <View>
            <View className="flex-row justify-between mt-4 px-4 items-center ">
              <Text className="text-[24px] text-[#2C7379] font-bold">Top Tips</Text>
              <TouchableOpacity className="flex-row items-center justify-center space-x-1">
                <Text className="text-[17px] text-[#A0C4C7]">Explore</Text>
                <AntDesign name="arrowright" size={24} color="#A0C4C7" />
              </TouchableOpacity>
            </View>

            <View className="px-2 mt-1 flex-row items-center justify-evenly flex-wrap">
              {mainData?.length > 0 ? (
                mainData.map((data, i) => (
                  <ItemCardContainer
                    key={i}
                    ImageSrc={
                      data?.photo?.images?.medium?.url
                        ? { uri: data.photo.images.medium.url }
                        : require("../assets/emojii.png")
                    }
                    title={data?.name ?? ''}
                    location={data?.location_string ?? ''}
                  />
                ))
              ) : (
                <View className="w-full h-[350px] items-center space-y-5 justify-center">
                  <Image 
                    source={require("../assets/download.png")}         
                    className="w-400 h-400"
                  />
                  <Text className="text-2xl text-[#428288] font-semibold">
                    Ooops...No Data Found
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}

export default Discover;
