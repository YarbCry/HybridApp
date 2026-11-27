import { Drawer } from 'expo-router/drawer';

export default function DrawerDemoLayout() {
  return (
    <Drawer screenOptions={{ drawerActiveTintColor: '#047857' }}>
      <Drawer.Screen name="index" options={{ title: 'Home', drawerLabel: 'Home' }} />
      <Drawer.Screen name="notifications" options={{ title: 'Notifications' }} />
      <Drawer.Screen name="about" options={{ title: 'About' }} />
    </Drawer>
  );
}
