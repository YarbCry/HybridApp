import { router } from 'expo-router';
import { Pressable, Text, View } from 'react-native';

export default function DrawerHome() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-2xl font-bold text-slate-900">Drawer Home</Text>
      <Text className="mt-3 text-center text-slate-600">Use the menu button or swipe from the left edge to change screens.</Text>
      <Pressable accessibilityRole="button" onPress={() => router.back()} className="mt-8 rounded-xl bg-emerald-700 px-5 py-3">
        <Text className="font-semibold text-white">Back to Lessons</Text>
      </Pressable>
    </View>
  );
}
