import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-center text-2xl 
      font-serif font-semibold text-accent"
      >
        Lumora
      </Text>

      <Link href='/wishlist'>Go to wishlist</Link>
    </View>
  );
}