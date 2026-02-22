import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: '#9381FF',
                headerStyle: {
                    backgroundColor: '#1A1A1A',
                },
                headerShadowVisible: false,
                headerTintColor: '#fff',
                tabBarStyle: {
                    backgroundColor: '#1A1A1A'
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Lumora",
                    headerTitleStyle: {
                        fontFamily: "sansSemi",
                        fontSize: 36,
                        fontWeight: 600,
                        color: '#9381FF'
                    },
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'home-sharp' : 'home-outline'}
                            color={color}
                            size={24}
                        />
                    )
                }}

            />
            <Tabs.Screen
                name="wishlist"
                options={{
                    title: "Wishlist",
                    headerTitleStyle: {
                        fontFamily: "sansSemi",
                        fontSize: 36,
                        fontWeight: 600,
                        color: '#9381FF'
                    },
                    tabBarIcon: ({ color, focused }) => (
                        <Ionicons
                            name={focused ? 'bookmark' : 'bookmark-outline'}
                            color={color}
                            size={24}
                        />
                    )
                }} />
        </Tabs>
    )
}