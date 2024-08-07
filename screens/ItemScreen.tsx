import { useNavigation, RouteProp } from '@react-navigation/native';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';



type RootStackParamList = {
    ItemScreen: { param: DataType }; // Replace 'any' with 'DataType'
  };
  
  type DataType = {
    photo?: {
      images?: {
        medium?: {
          url?: string;
        };
      };
    };
    name?: string;
    location_string?: string;
    price_level?: string;
    price?: string;
    open_now_text?: string;
    rating?: string;
    bearing?: string;
    description?: string;
    phone?: string;
    address?: string;
    email?: string;
    cuisine?: Array<{ key: string; name: string }>;
  };

type ItemScreenRouteProp = RouteProp<RootStackParamList, 'ItemScreen'>;
type ItemScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ItemScreen'>;

type Props = {
  route: ItemScreenRouteProp;
};

const ItemScreen: React.FC<Props> = ({ route }) => {
  const navigation = useNavigation<ItemScreenNavigationProp>();

  const data = route?.params?.param;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, [navigation]);

  return (
    <SafeAreaView className="flex-1 bg-white relative">
      <ScrollView className="flex-1 px-4 py-6">
        <View className="relative bg-white shadow-lg">
          <Image
            source={
                data?.photo?.images?.medium?.url
                ? { uri: data.photo.images.medium.url }
                : require("../assets/emojii.png")
            
            }
            className="w-full h-64 object-cover rounded-2xl"
          />
           <View className="absolute flex-row inset-x-0 top-5 justify-between px-6">
              <TouchableOpacity 
              onPress={() => navigation.navigate('Discover')}
              className="w-10 h-10 rounded-md items-center justify-center bg-white">
                <Ionicons name="chevron-back" size={24} color="#06B2BE" />
              </TouchableOpacity>
              <TouchableOpacity className="w-10 h-10 rounded-md items-center justify-center bg-[#06B2BE]">
                <FontAwesome name="heartbeat" size={24} color="white" />
              </TouchableOpacity>
           </View>
           
           <View className="absolute flex-row inset-x-0 bottom-5 justify-between px-6">
              <View className="flex-row space-x-2 items-center">
                 <Text className="text-[12px] font-bold text-gray-100">
                    {data?.price_level}
                 </Text>
                 <Text className="text-[20px] font-bold text-gray-100">
                    {data?.price}
                 </Text>
              </View>
              <View className="px-2 py-1 rounded-md bg-teal-100">
                 <Text>{data?.open_now_text}</Text>
              </View>      
           </View> 
        </View>

        <View className="mt-6">
            <Text className="text-[#428288] text=[30px] font-bold">
                {data?.name}
            </Text>
            <View className="flex-row items-center space-x-2 mt-2">
               <FontAwesome name="map-marker" size={25} color="#8C9EA6" />
               <Text className="text-[#8C9EA6] text-[16px] font-bold">
                  {data?.location_string}
               </Text>
            </View>
        </View>

        <View className="mt-4 flex-row items-center justify-between">
           {data?.rating && (
              <View className="flex-row items-center space-x-2">
                <View className="W-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                    <FontAwesome name='star' size={24} color="#D58574" />
                </View>
                <View>
                    <Text className="text-[#515151]">{data?.rating}</Text>
                    <Text className="text-[#515151]">Ratings</Text>
                </View>             
              </View>
           )}
           {data?.price_level && (
              <View className="flex-row items-center space-x-2">
                <View className="W-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                    <MaterialIcons name="attach-money" size={24} color="black" />
                </View>
                <View>
                    <Text className="text-[#515151]">{data?.price_level}</Text>
                    <Text className="text-[#515151]">Price Level</Text>
                </View>             
              </View>
           )}
           {data?.bearing && (
              <View className="flex-row items-center space-x-2">
                <View className="W-12 h-12 rounded-2xl bg-red-100 items-center justify-center shadow-md">
                    <FontAwesome name="map-signs" size={24} color="black" />
                </View>
                <View>
                    <Text className="text-[#515151]">{data?.bearing}</Text>
                    <Text className="text-[#515151]">Bearing</Text>
                </View>             
              </View>
           )}
        </View>

            {data?.description && (
                <Text className="mt-4 tracking-wide text-[16px] font-semibold text-[#97A6AF]">
                   {data?.description} 
                </Text>
            )}

            {data?.cuisine && (
                    <View className="flex-row gap-2 items-center justify-start flex-wrap mt-4">
                        {data.cuisine.map((cuisineItem) => (
                        <TouchableOpacity
                            key={cuisineItem.key} 
                            className="px-2 py-1 rounded-md bg-emerald-100"
                        >
                            <Text>{cuisineItem.name}</Text>
                        </TouchableOpacity>
                        ))}
                    </View>
            )}

            <View className=" space-y-2 mt-4 bg-gray-100 rounded-2xl px-4 py-2">
                {data?.phone && (
                    <View className="items-center flex-row space-x-6">
                        <FontAwesome name="phone" size={24} color="#428288" />
                        <Text className="text-lg">{data?.phone}</Text>
                    </View>
                )}
                {data?.email && (
                    <View className="items-center flex-row space-x-6">
                        <FontAwesome name="envelope" size={24} color="#428288" />
                        <Text className="text-lg">{data?.email}</Text>
                    </View>
                )}
                {data?.address && (
                    <View className="items-center flex-row space-x-6">
                        <FontAwesome name="map-pin" size={24} color="#428288" />
                        <Text className="text-lg">{data?.address}</Text>
                    </View>
                )}
                <View className="mt-4 px-4 py-4 rounded-lg bg-[#06B2BE] items-center justify-center mb-12">
                    <Text className="text-3xl font-semibold uppercase tracking-wider text-gray-100"
                    >Book Now</Text>
                </View>

            </View>

      </ScrollView> 
    </SafeAreaView>
  );
};

export default ItemScreen;
