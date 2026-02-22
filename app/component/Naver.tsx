import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';

type NaverProps = {
    readingTime?: number | null;
};

const Naver = ({ readingTime }: NaverProps) => {
    const router = useRouter();
    const insets = useSafeAreaInsets();

    return (
        <View
            style={{ paddingTop: Math.max(insets.top, 16) }}
            className='px-4 pb-4 flex-row justify-between items-center'
        >
            <Pressable
                onPress={() => router.back()}
                className='h-10 w-10 border border-[#262626] items-center justify-center rounded-lg bg-[#8346ed3f]'
            >
                <View className=''>
                    <Ionicons name="chevron-back" size={24} color="#9381FF" style={{ marginLeft: -2 }} />
                </View>
            </Pressable>

            <View className='p-2 border border-[#262626] rounded-lg bg-[#8346ed3f] '>
                <Text className='text-accent font-sans font-semibold text-sm'>{readingTime} min read</Text>
            </View>
        </View>
    )
}

export default Naver