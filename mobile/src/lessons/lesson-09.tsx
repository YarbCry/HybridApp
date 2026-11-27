import { useState } from 'react';
import { Image, Pressable, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { showAlert } from './alert';
import type { Lesson } from './types';

const card = {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#e2e8f0',
  borderRadius: 16,
  padding: 20,
} as const;

function Btn({ title, onPress, tone = 'blue' }: { title: string; onPress: () => void; tone?: 'blue' | 'red' | 'grey' }) {
  const bg = { blue: '#2563eb', red: '#dc2626', grey: '#475569' }[tone];
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: bg,
        opacity: pressed ? 0.8 : 1,
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
      })}>
      <Text style={{ color: '#fff', fontWeight: '600' }}>{title}</Text>
    </Pressable>
  );
}

/* 9.1 AsyncStorage: setItem / getItem / removeItem / clear (book p.137-143) */
function AsyncStorageExample() {
  const [data, setData] = useState('');
  const [keys, setKeys] = useState<string[]>([]);

  const add = async () => {
    await AsyncStorage.setItem('gfg', 'GeeksforGeeks');
    setKeys([...(await AsyncStorage.getAllKeys())]);
  };
  const get = async () => {
    const value = await AsyncStorage.getItem('gfg');
    setData(value ?? '(nothing stored)');
  };
  const remove = async () => {
    await AsyncStorage.removeItem('gfg');
    setData('');
    setKeys([...(await AsyncStorage.getAllKeys())]);
  };
  const clear = async () => {
    await AsyncStorage.clear();
    setData('');
    setKeys([]);
  };

  return (
    <View style={{ gap: 12 }}>
      <View style={{ ...card, alignItems: 'center', minHeight: 110, justifyContent: 'center' }}>
        <Text style={{ fontSize: 32, fontWeight: '700', color: '#0f172a' }}>{data || '—'}</Text>
        <Text style={{ marginTop: 8, color: '#64748b' }}>Keys: {keys.length ? keys.join(', ') : 'none'}</Text>
      </View>
      <Btn title="add  (setItem)" onPress={add} />
      <Btn title="get  (getItem)" onPress={get} />
      <Btn title="remove  (removeItem)" onPress={remove} tone="grey" />
      <Btn title="clear" onPress={clear} tone="red" />
      <Text style={{ color: '#64748b' }}>Reload the page after add: the value is still there.</Text>
    </View>
  );
}

/* 9.2 Button + useState counter */
function ButtonExample() {
  const [count, setCount] = useState(0);
  return (
    <View style={{ ...card, alignItems: 'center', gap: 20 }}>
      <Text style={{ fontSize: 56, fontWeight: '700', color: '#0f172a' }}>{count}</Text>
      <View style={{ width: 200 }}>
        <Btn title="Click Me" onPress={() => setCount(count + 1)} />
      </View>
    </View>
  );
}

/* 9.3 TextInput */
function TextInputExample() {
  const [name, setName] = useState('');
  return (
    <View style={{ ...card, gap: 16 }}>
      <TextInput
        value={name}
        onChangeText={setName}
        placeholder="Enter Name"
        style={{ borderWidth: 1, borderColor: 'green', borderRadius: 8, paddingHorizontal: 12, paddingVertical: 10, fontSize: 18 }}
      />
      <Text style={{ fontSize: 18, color: 'green' }}>Your name is: {name}</Text>
    </View>
  );
}

/* 9.4 Pressable: wrap Text and Image */
function PressableExample() {
  return (
    <View style={{ ...card, alignItems: 'center', gap: 24 }}>
      <Pressable onPress={() => showAlert('Text Pressable Example')} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
        <Text style={{ fontSize: 30, fontWeight: '700' }}>Press Me</Text>
      </Pressable>
      <Pressable onPress={() => showAlert('Image Pressable Example')} style={({ pressed }) => ({ opacity: pressed ? 0.5 : 1 })}>
        <Image
          source={{ uri: 'https://media.geeksforgeeks.org/wp-content/uploads/20220217151648/download3.png' }}
          style={{ height: 200, width: 200 }}
        />
      </Pressable>
    </View>
  );
}

export const lesson09: Lesson = {
  id: 9,
  title: 'AsyncStorage, Button, TextInput, Pressable',
  examples: [
    { id: 'async-storage', title: 'AsyncStorage', description: 'Save and read key-value data that survives a restart.', Component: AsyncStorageExample },
    { id: 'button', title: 'Button', description: 'A counter driven by the Button component and useState.', Component: ButtonExample },
    { id: 'text-input', title: 'TextInput', description: 'Read what the user types and show it live.', Component: TextInputExample },
    { id: 'pressable', title: 'Pressable', description: 'Make a Text and an Image respond to presses.', Component: PressableExample },
  ],
};
