import { Text, View, Image } from 'react-native';
import React from 'react';
import RenderList from '../component/RenderList';

const Index = () => {

  // 1. Extract everything you want at the top of the page into this variable
  const PageHeader = () => (
    <View className='pb-4'>
      <View>
        <Image
          source={require('../../assets/images/home.jpg')}
          resizeMode="cover"
          className='absolute w-full h-52 rounded-lg mt-4'
        />
        <View className='relative top-4 left-0 w-full h-52 items-center justify-center rounded-lg bg-[#11111180] p-4'>
          <Text className='text-4xl font-serifItalic text-[#e2ceaf] text-center'>
            Welcome to Lumora !!!
          </Text>
        </View>
      </View>

      <View className='pt-8 px-2'>
        <Text className='text-xl font-semibold font-serifItalic text-accent'>
          Newly Added:
        </Text>
      </View>
    </View>
  );

  return (
    // 2. Your main screen is now incredibly clean. Just flex-1 and the list!
    <View className='flex-1 bg-background px-4 '>
      {/* 3. We pass the header into the list via a prop */}
      <RenderList header={PageHeader} /> 
    </View>
  );
};

export default Index;