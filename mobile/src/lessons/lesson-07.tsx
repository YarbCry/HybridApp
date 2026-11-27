import { useState } from 'react';
import { router } from 'expo-router';
import { Alert, Button, FlatList, Platform, Pressable, ScrollView, Text, View } from 'react-native';

import { showAlert } from './alert';
import type { Lesson } from './types';

const topics = ['Data Structures', 'STL', 'C++', 'Java', 'Python', 'ReactJS', 'Angular', 'NodeJS'];

const products = Array.from({ length: 15 }, (_, i) => ({
  id: String(i + 1),
  name: `Item ${i + 1}`,
  price: (i + 1) * 10,
}));

function ViewTextExample() {
  return (
    <View className="rounded-2xl bg-emerald-700 p-6">
      <Text className="text-xl font-bold text-white">View + Text</Text>
      <Text className="mt-2 text-base text-emerald-50">
        This green card is a View containing two Text components.
      </Text>
    </View>
  );
}

function AlertExample() {
  const show = () =>
    Platform.OS === 'web'
      ? window.alert('Welcome to Lesson 7!')
      : Alert.alert('Lesson 7', 'Welcome to React Native components!');
  return (
    <Pressable
      accessibilityRole="button"
      onPress={show}
      className="items-center rounded-xl bg-emerald-600 px-5 py-4 active:bg-emerald-700">
      <Text className="font-semibold text-white">Show alert</Text>
    </Pressable>
  );
}

function ButtonAlertExample() {
  return (
    <View style={{ alignItems: 'center', padding: 24, backgroundColor: '#fff', borderRadius: 16, borderWidth: 1, borderColor: '#e2e8f0' }}>
      <Button title="Press Me" color="green" onPress={() => showAlert('Welcome To GeeksForGeeks..')} />
    </View>
  );
}

function HelloExample() {
  return (
    <View style={{ backgroundColor: '#008000', alignItems: 'center', justifyContent: 'center', height: 200, borderRadius: 16 }}>
      <Text style={{ color: '#fff', fontSize: 20 }}>GeeksforGeeks</Text>
    </View>
  );
}

const orderItems = Array.from({ length: 15 }, (_, i) => ({ id: i + 1, name: `Item ${i + 1}`, price: (i + 1) * 10 }));

function ScrollItemsExample() {
  return (
    <ScrollView
      nestedScrollEnabled
      style={{ height: 420 }}
      contentContainerStyle={{ gap: 12, padding: 4 }}>
      {orderItems.map((it) => (
        <View
          key={it.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 12,
            borderRadius: 10,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#e2e8f0',
          }}>
          <Text style={{ fontSize: 18 }}>
            {it.name} <Text style={{ color: '#C2185B' }}>${it.price}</Text>
          </Text>
          <Button title="Order" color="#FFC107" onPress={() => showAlert(`Ordered ${it.name}`)} />
        </View>
      ))}
    </ScrollView>
  );
}

function ScrollViewExample() {
  return (
    <ScrollView
      nestedScrollEnabled
      style={{ height: 380, borderRadius: 16, borderWidth: 1, borderColor: '#e2e8f0', backgroundColor: '#fff' }}
      contentContainerStyle={{ padding: 16 }}>
      {topics.map((t) => (
        <Text key={t} className="text-base text-slate-800" style={{ paddingVertical: 16, borderBottomWidth: 1, borderBottomColor: '#f1f5f9' }}>
          {t}
        </Text>
      ))}
    </ScrollView>
  );
}

function FlatListExample() {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ gap: 12 }}
      scrollEnabled={false}
      renderItem={({ item }) => (
        <View className="flex-row items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-4">
          <Text className="text-base font-medium text-slate-900">{item.name}</Text>
          <Text className="font-semibold text-emerald-700">${item.price}</Text>
        </View>
      )}
    />
  );
}

function TabsExample() {
  const [active, setActive] = useState<'Home' | 'Settings'>('Home');
  return (
    <View>
      <View className="flex-row gap-2">
        {(['Home', 'Settings'] as const).map((tab) => (
          <Pressable
            key={tab}
            accessibilityRole="tab"
            accessibilityState={{ selected: active === tab }}
            onPress={() => setActive(tab)}
            className={`flex-1 items-center rounded-xl px-4 py-3 ${active === tab ? 'bg-emerald-700' : 'bg-slate-200'}`}>
            <Text className={active === tab ? 'font-semibold text-white' : 'font-semibold text-slate-700'}>
              {tab}
            </Text>
          </Pressable>
        ))}
      </View>
      <View className="mt-2 rounded-xl bg-white p-5">
        <Text className="text-base text-slate-800">{active} tab content</Text>
      </View>
    </View>
  );
}

function DrawerExample() {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={() => router.push('/drawer-demo')}
      className="items-center rounded-xl bg-slate-900 px-5 py-4">
      <Text className="font-semibold text-white">Open drawer</Text>
    </Pressable>
  );
}

export const lesson07: Lesson = {
  id: 7,
  title: 'React Native components',
  examples: [
    { id: 'hello', title: 'Styled Text in a View', description: 'The book\'s GeeksforGeeks green screen.', Component: HelloExample },
    { id: 'view-text', title: 'View + Text', description: 'A View containing Text components.', Component: ViewTextExample },
    { id: 'alert', title: 'Alert', description: 'Show a native alert from a button.', Component: AlertExample },
    { id: 'button-alert', title: 'Button + Alert', description: 'The built-in Button component showing an alert.', Component: ButtonAlertExample },
    { id: 'scrollview', title: 'ScrollView', description: 'Scroll a fixed-height panel.', Component: ScrollViewExample },
    { id: 'scroll-items', title: 'ScrollView: items', description: 'Fifteen items with Order buttons, as in the book.', Component: ScrollItemsExample },
    { id: 'flatlist', title: 'FlatList', description: 'Replacement for the removed ListView.', Component: FlatListExample },
    { id: 'tabs', title: 'Tab navigation', description: 'Switch panels with local tab state.', Component: TabsExample },
    { id: 'drawer', title: 'Drawer navigation', description: 'Real Expo Router drawer with 3 routes.', Component: DrawerExample },
  ],
};
