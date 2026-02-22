import { Text, View, Image } from 'react-native';
import React from 'react';
import RenderList from '../component/RenderList';

const Index = () => {

  const PageHeader = () => (
    <View className='pb-4'>
      <View>
        <Image
          source={require('../../assets/images/home.jpg')}
          resizeMode="cover"
          className='absolute w-full h-52 rounded-lg'
        />
        <View className='relative top-0 left-0 w-full h-52 items-center justify-center rounded-lg bg-[#11111180] p-4'>
          <Text className='text-4xl z-10 font-serifItalic text-[#e2ceaf] text-center'>
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
    <View className='flex-1 bg-background px-4 '>
      <RenderList header={PageHeader} /> 
    </View>
  );
};

export default Index;