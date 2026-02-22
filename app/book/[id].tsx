import { View, Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useLocalSearchParams } from 'expo-router';
import Markdown from 'react-native-markdown-display';

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
                <ActivityIndicator size="large" color="#d05aff" />
            </View>
        );
    }

    if (error) {
        return (
            <View className='flex-1 justify-center items-center bg-background p-4'>
                <Text className='text-red-500 text-center font-sans'>{error}</Text>
            </View>
        );
    }

    return (
        <View className='flex-1 bg-background'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ padding: 16, paddingBottom: 60 }} // Safe bottom padding
            >
                {summary?.readingTime ? (
                    <View className='mb-4 pb-4 border-b border-textSecondary/20'>
                        <Text className='text-textSecondary font-sans font-medium text-sm'>
                            ⏱️ {summary.readingTime} min read
                        </Text>
                    </View>
                ) : null}

                <Markdown style={markdownStyles}>
                    {summary?.content || "*No summary available for this book.*"}
                </Markdown>
            </ScrollView>
        </View>
    );
}

const markdownStyles = {
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
    }
};

export default BookSummary;