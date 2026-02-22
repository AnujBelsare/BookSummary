import { View, Image, Text, Pressable, FlatList, ListRenderItem } from 'react-native';
// 1. Import ReactElement from 'react'
import React, { ReactElement } from 'react'; 
import { Link } from 'expo-router';

type RenderListProps = {
  header: () => ReactElement; 
};


type Book = {
  id: string;
  title: string;
  author: string;
  rating: string;
  genre: string;
};

const RenderList = ({ header }: RenderListProps) => {
  const books: Book[] = [
    { id: '1', title: 'Atomic Habits', author: 'James Clear', rating: '4.8⭐', genre: 'Self-Help' },
    { id: '2', title: 'Deep Work', author: 'Cal Newport', rating: '4.7⭐', genre: 'Focus' },
    { id: '3', title: 'Ego is the Enemy', author: 'Ryan Holiday', rating: '4.6⭐', genre: 'Philosophy' },
    { id: '4', title: 'Dune', author: 'Frank Herbert', rating: '4.9⭐', genre: 'Sci-Fi' },
    { id: '5', title: '1984', author: 'George Orwell', rating: '4.8⭐', genre: 'Fiction' },
    { id: '6', title: 'The Hobbit', author: 'J.R.R. Tolkien', rating: '4.9⭐', genre: 'Fantasy' },
  ];

  const renderBook: ListRenderItem<Book> = ({ item }) => (
    // ... your card UI code remains exactly the same!
    <View className='w-[48%] mb-4 border p-2 border-textSecondary/30 rounded-xl bg-textPrimary shadow-sm flex-col justify-between'>
      <View>
        <Image
          source={require('../../assets/images/home.jpg')}
          resizeMode="cover"
          className='w-full h-24 rounded-md' 
        />
        <View className='mt-2'>
          <Text className='text-center font-serif font-semibold text-xs' numberOfLines={1}>
            {item.title}
          </Text>
          <Text className='text-center font-sans font-medium text-[10px] opacity-70 mt-0.5' numberOfLines={1}>
            {item.author}
          </Text>
        </View>
      </View>
      <View className='mt-3'>
          <Link href='/' asChild>
            <Pressable className='rounded-md bg-accent py-1 active:opacity-80'>
                <Text className='text-center font-sansBold text-[10px] text-white'>Read</Text>
            </Pressable>
          </Link>
      </View>
    </View>
  );

  return (
    <View className='flex-1 w-full'> 
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={renderBook} 
        ListHeaderComponent={header} // This is now perfectly typed!
        numColumns={2} 
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 100 }} 
      />
    </View>
  );
}

export default RenderList;