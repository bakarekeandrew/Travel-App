import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Fontisto } from '@expo/vector-icons';
import { useNavigation, NavigationProp } from '@react-navigation/native';

// Define the navigation parameter types
type RootStackParamList = {
  ItemScreen: { param: string };
  // Other screens can be defined here if needed
};

// Define the component props
type ItemCardContainerProps = {
  title: string;
  data: string;
  ImageSrc: { uri: string } | number;
  location: string;
};

const ItemCardContainer: React.FC<ItemCardContainerProps> = ({ title, ImageSrc, location, data }) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ItemScreen', { param: data })}
      className="rounded-md border border-gray-300 space-y-2 px-3 py-2 shadow-md bg-white w-[175px] my-2"
    >
      <Image
        source={typeof ImageSrc === 'string' ? { uri: ImageSrc } : ImageSrc}
        className="w-full h-32 rounded object-cover"
      />
      {title ? (
        <>
          <Text className="text-[#428288] text-[18px] font-bold">
            {title.length > 14 ? `${title.slice(0, 14)}..` : title}
          </Text>
          <View className="flex-row items-center">
            <Fontisto name="map-marker-alt" size={24} color="#8597A2" />
            <Text className="mx-1 text-[#428288]">
              {location.length > 14 ? `${location.slice(0, 14)}..` : location}
            </Text>
          </View>
        </>
      ) : null}
    </TouchableOpacity>
  );
};

export default ItemCardContainer;
