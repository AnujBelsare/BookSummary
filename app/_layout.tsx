import "./global.css"
import { Stack } from "expo-router"
import { useFonts } from "expo-font"
import {
  GoogleSansFlex_400Regular,
  GoogleSansFlex_600SemiBold,
  GoogleSansFlex_700Bold,
} from "@expo-google-fonts/google-sans-flex"

import {
  LibreBaskerville_400Regular,
  LibreBaskerville_400Regular_Italic,
  LibreBaskerville_700Bold,
} from "@expo-google-fonts/libre-baskerville"

import { View } from "react-native"

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    GoogleSansRegular: GoogleSansFlex_400Regular,
    GoogleSansSemiBold: GoogleSansFlex_600SemiBold,
    GoogleSansBold: GoogleSansFlex_700Bold,

    LibreRegular: LibreBaskerville_400Regular,
    LibreItalic: LibreBaskerville_400Regular_Italic,
    LibreBold: LibreBaskerville_700Bold,
  })

  if (!fontsLoaded) return null

  return (
    <View className="flex-1 bg-background">
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </View>
  )
}
