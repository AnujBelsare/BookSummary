import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Stack, useLocalSearchParams } from 'expo-router';
import Markdown from 'react-native-markdown-display';
import Naver from '../component/Naver';

type Summary = {
    content: string;
    readingTime: number;
};

const BookSummary = () => {
    const { id } = useLocalSearchParams();

    const [summary, setSummary] = useState<Summary | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {

        if (id) {
            handleFetch();
        }
    }, [id]);

    const handleFetch = async () => {
        setLoading(true);
        setError('');

        try {
            const res = await fetch(`https://book-summary-server.vercel.app/api/book/${id}/summary`);

            if (!res.ok) {
                throw new Error(`Failed to load summary. (Status: ${res.status})`);
            }

            const result = await res.json();
            setSummary(result.data);
        }
        catch (error: any) {
            setError(error.message || 'An unexpected error occurred.');
        }
        finally {
            setLoading(false);
        }
    }


    if (loading) {
        return (
            <View className='flex-1 justify-center items-center bg-background'>
                <Stack.Screen options={{ headerShown: false }} />
                <ActivityIndicator size="large" color="#d05aff" />
            </View>
        );
    }

    if (error) {
        return (
            <View className='flex-1 justify-center items-center bg-background p-4'>
                <Stack.Screen options={{ headerShown: false }} />
                <Naver />
                <Text className='text-red-500 text-center font-sans'>{error}</Text>
            </View>
        );
    }

    return (
        <View className='flex-1 bg-background'>
            <Stack.Screen options={{ headerShown: false }} />
            <Naver readingTime={summary?.readingTime} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16, paddingBottom: 60 }}
            >
                <Markdown style={markdownStyles}>
                    {summary?.content || "*No summary available for this book.*"}
                </Markdown>
            </ScrollView>
        </View>
    );
}

const markdownStyles = StyleSheet.create({
    body: {
        fontFamily: 'serif',
        fontSize: 16,
        lineHeight: 26,
        color: '#DCD7C9',
        marginBottom: 12,
    },
    heading1: {
        fontFamily: 'serif',
        lineHeight: 36,
        fontWeight: 'bold',
        color: '#F0ECE2',
        marginBottom: 10,
    },
    heading2: {
        marginBottom: 8,
        marginTop: 14,
        color: '#F0ECE2',
    },
    hr: {
        backgroundColor: '#333333',
        height: 1,
        marginVertical: 24,
        alignSelf: 'center',
        width: '98%',
    },
    blockquote: {
        backgroundColor: '#1c1c1e',
        borderLeftWidth: 4,
        borderLeftColor: '#555555',
        paddingHorizontal: 16,
        paddingVertical: 12,
        marginVertical: 16,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
    },
    em: {
        fontStyle: 'italic',
        color: '#A8A8A8',
    },
    strong: {
        fontWeight: 'bold',
        color: '#F0ECE2',
    },
    link: {
        color: '#007AFF',
        textDecorationLine: 'none',
    },
    code_inline: {
        fontFamily: 'monospace',
        backgroundColor: '#2c2c2e',
        color: '#ff9f0a',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
        overflow: 'hidden',
    },
    fence: {
        fontFamily: 'monospace',
        backgroundColor: '#1c1c1e',
        color: '#e5e5e5',
        padding: 16,
        borderRadius: 8,
        marginVertical: 16,
        borderWidth: 1,
        borderColor: '#333333',
        overflow: 'hidden',
    },
    table: {
        borderWidth: 1,
        borderColor: '#333333',
        borderRadius: 8,
        marginVertical: 16,
    },
    th: {
        fontWeight: 'bold',
        color: '#ffffff',
        padding: 12,
        backgroundColor: '#222222',
        borderBottomWidth: 1,
        borderBottomColor: '#333333',
    },
    td: {
        color: '#e5e5e5',
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#222222',
    },
    heading3: {
        color: '#F0ECE2',
        marginTop: 16,
        marginBottom: 8,
    },
    heading4: {
        color: '#F0ECE2',
        marginTop: 16,
        marginBottom: 8,
    },
    heading5: {
        color: '#F0ECE2',
        marginTop: 16,
        marginBottom: 8,
    },
    heading6: {
        color: '#F0ECE2',
        marginTop: 16,
        marginBottom: 8,
    },
    bullet_list: {
        marginVertical: 12,
    },
    ordered_list: {
        marginVertical: 12,
    },
    list_item: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginBottom: 8,
    },
    bullet_list_icon: {
        color: 'rgba(240, 236, 226, 0.7)',
        fontSize: 16,
        marginRight: 10,
        lineHeight: 24,
    },
    ordered_list_icon: {
        color: 'rgba(240, 236, 226, 0.7)',
        fontFamily: 'sans-serif',
        fontSize: 16,
        marginRight: 10,
        lineHeight: 24,
        fontWeight: 'bold',
    }
});

export default BookSummary;