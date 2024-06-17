import { View, Image, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ImageSourcePropType } from 'react-native';


type MenuContainerProps = {
    title: string;
    ImageSrc: ImageSourcePropType;
    type: string;
    setType: React.Dispatch<React.SetStateAction<string>>;
  };
  
  const MenuContainer: React.FC<MenuContainerProps> = ({ title, ImageSrc, type, setType }) => {
    const handlePress = () => {
       setType(title.toLowerCase());
    };
  return (
    <TouchableOpacity className="items-center justify-center space-y-2" onPress={handlePress}>
       <View className={`w-24 h-24 shadow-sm items-center justify-center rounded-full ${type === title.toLowerCase() ? "bg-gray-900 " : ""}`}>
          <Image
             source={ImageSrc}
             className="w-full h-full object-contain"
             style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
          />
       </View>
       <Text className="text-[#00BCC9] text-xl font-semibold">{title}</Text>
    </TouchableOpacity>
  )
}

export default MenuContainer  