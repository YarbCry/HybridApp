import { Text, View } from 'react-native';

export default function DrawerNotifications() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-2xl font-bold text-slate-900">Notifications</Text>
      <Text className="mt-3 text-slate-600">This is a separate drawer route.</Text>
    </View>
  );
}
