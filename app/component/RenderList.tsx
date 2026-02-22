import { View, Image, Text, Pressable, FlatList, ListRenderItem, ActivityIndicator } from 'react-native';
import React, { ReactElement, useState, useEffect } from 'react';
import { Link } from 'expo-router';

type RenderListProps = {
    header: () => ReactElement;
};

type Book = {
    _id: string;
    title: string;
    author: string;
    averageRating: number;
    genres: string[];
    coverImage: string;
};

const RenderList = ({ header }: RenderListProps) => {

    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        handleFetch();
    }, []);

    const handleFetch = async () => {
        setLoading(true);
        try {
            const res = await fetch('https://book-summary-server.vercel.app/api/book');

            if (!res.ok) {
                throw new Error(`Error status: ${res.status}`);
            }

            const json = await res.json();

            setBooks(json.data);
        }
        catch (err: any) {
            console.log(err);
            setError(err.message);
        }
        finally {
            setLoading(false);
        }
    }

    const renderBook: ListRenderItem<Book> = ({ item }) => (
        <View className='w-[48%] mb-4 border px-2 border-textSecondary/30 rounded-xl bg-textPrimary shadow-sm flex-col justify-between'>

            <View className='mt-3'>
                <Link href={{
                    pathname: "/book/[id]",
                    params: {id: item._id}
                }} asChild>
                    <Pressable>
                        <View>
                            <Image
                                source={{ uri: item.coverImage }}
                                resizeMode="contain"
                                className='w-full h-36 rounded-md'
                            />
                            <View className='mt-2 p-2'>
                                <Text className='text-center font-serif font-semibold text-xs' numberOfLines={1}>
                                    {item.title}
                                </Text>
                                <Text className='text-center font-sans font-medium text-[10px] opacity-70 mt-0.5' numberOfLines={1}>
                                    {item.author}
                                </Text>
                            </View>
                            <View className='flex-row justify-between items-center p-2 pb-3'>
                                <Text className='text-[10px]'>{item.averageRating}⭐</Text>

                                <Text className='text-[10px] bg-textSecondary/20 px-1.5 py-0.5 rounded-md overflow-hidden'>
                                    {item.genres?.[0] || 'Unknown'}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                </Link>
            </View>
        </View>
    );

    if (loading) {
        return (
            <View className='flex-1 w-full'>
                {header()}
                <View className='flex-1 justify-center items-center py-10'>
                    <ActivityIndicator size="large" color="#d05aff" />
                </View>
            </View>
        );
    }

    if (error) {
        return (
            <View className='flex-1 w-full items-center py-10'>
                {header()}
                <Text className='text-red-500'>Failed to load books: {error}</Text>
            </View>
        );
    }

    return (
        <View className='flex-1 w-full'>
            <FlatList
                data={books}
                keyExtractor={(item) => item._id}
                renderItem={renderBook}
                ListHeaderComponent={header}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={{ justifyContent: 'space-between' }}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </View>
    );
}

export default RenderList;