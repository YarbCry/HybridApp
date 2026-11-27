import { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Platform,
  Pressable,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

import type { Lesson } from './types';

const card = {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#e2e8f0',
  borderRadius: 16,
  padding: 20,
} as const;

/* 8.1 ActivityIndicator: spinner for 3 seconds, then content (book p.116) */
function LoadingCard() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <View style={{ ...card, height: 200, alignItems: 'center', justifyContent: 'center', gap: 12 }}>
      {loading ? (
        <>
          <ActivityIndicator size="large" color="blue" />
          <Text className="text-slate-500">Loading for 3 seconds…</Text>
        </>
      ) : (
        <Text className="text-lg font-semibold text-slate-900">Content Loaded Successfully!</Text>
      )}
    </View>
  );
}

function ActivityIndicatorExample() {
  const [run, setRun] = useState(0);

  return (
    <View style={{ gap: 16 }}>
      <LoadingCard key={run} />
      <View style={{ ...card, flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <ActivityIndicator size="large" color="lightgreen" />
        <Text className="text-base text-slate-700">Loading... (large, lightgreen)</Text>
      </View>
      <Pressable
        accessibilityRole="button"
        onPress={() => setRun((n) => n + 1)}
        style={{ backgroundColor: '#0f172a', borderRadius: 12, padding: 14, alignItems: 'center' }}>
        <Text style={{ color: '#fff', fontWeight: '600' }}>Reload</Text>
      </Pressable>
    </View>
  );
}

/* 8.3 Dumb components: UI only, data comes in through props */
function Greeting({ name }: { name: string }) {
  return (
    <View>
      <Text className="text-lg text-slate-900">Hello, {name}</Text>
    </View>
  );
}

function GFG() {
  return (
    <View style={{ backgroundColor: 'green', alignItems: 'center', padding: 4 }}>
      <Text style={{ fontSize: 25, color: 'white', margin: 10 }}>Geeksforgeeks</Text>
    </View>
  );
}

function DumbComponentExample() {
  return (
    <View style={{ gap: 16 }}>
      <View style={card}>
        <Text className="mb-2 text-xs font-bold uppercase text-slate-400">Greeting (props)</Text>
        <Greeting name="Rahul" />
      </View>
      <View style={{ ...card, gap: 8 }}>
        <Text className="mb-1 text-xs font-bold uppercase text-slate-400">GFG used 3 times</Text>
        <GFG />
        <GFG />
        <GFG />
      </View>
    </View>
  );
}

/* 8.4 TouchableHighlight */
function TouchableHighlightExample() {
  const onPress = () =>
    Platform.OS === 'web'
      ? window.alert('Touchable Highlight pressed.')
      : Alert.alert('Touchable Highlight pressed.');
  return (
    <View style={{ ...card, alignItems: 'center', paddingVertical: 48 }}>
      <TouchableHighlight
        onPress={onPress}
        activeOpacity={0.5}
        underlayColor="#67c904"
        style={{
          height: 50,
          width: 200,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4287f5',
        }}>
        <Text style={{ color: '#fff', fontSize: 18 }}>Click Me!</Text>
      </TouchableHighlight>
    </View>
  );
}

/* 8.5 FlatList: simple array of strings */
const fruits = ['Apple', 'Banana', 'Mango', 'Orange'];

function FlatListFruitsExample() {
  return (
    <View style={card}>
      <FlatList
        data={fruits}
        renderItem={({ item }) => <Text style={{ fontSize: 18, paddingVertical: 6 }}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

/* 8.5 FlatList: rows with separator, header and empty component */
const topics = [
  'Data Structures', 'STL', 'C++', 'Java', 'Python', 'Angular', 'NodeJS',
  'PHP', 'MongoDB', 'MySql', 'Android', 'iOS', 'Hadoop', 'Ajax', 'Ruby',
];

function FlatListTopicsExample() {
  const [data, setData] = useState(topics);
  return (
    <View style={{ gap: 12 }}>
      <View style={{ flexDirection: 'row', gap: 10 }}>
        <Pressable
          accessibilityRole="button"
          onPress={() => setData([])}
          style={{ backgroundColor: '#e2e8f0', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 8 }}>
          <Text style={{ fontWeight: '600', color: '#334155' }}>Clear (show empty UI)</Text>
        </Pressable>
        <Pressable
          accessibilityRole="button"
          onPress={() => setData(topics)}
          style={{ backgroundColor: '#047857', borderRadius: 10, paddingHorizontal: 14, paddingVertical: 8 }}>
          <Text style={{ fontWeight: '600', color: '#fff' }}>Reset</Text>
        </Pressable>
      </View>
      <View style={{ ...card, padding: 0, height: 420, overflow: 'hidden' }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item}
          ListHeaderComponent={
            <Text style={{ padding: 16, fontWeight: '700', color: '#0f172a' }}>FlatList in React Native</Text>
          }
          ItemSeparatorComponent={() => <View style={{ height: 1, backgroundColor: '#f1f5f9' }} />}
          ListEmptyComponent={<Text style={{ padding: 16, color: '#94a3b8' }}>No data</Text>}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 16,
                paddingVertical: 14,
              }}>
              <Text style={{ fontSize: 18 }}>{item}</Text>
              <View style={{ width: 10, height: 10, borderRadius: 5, backgroundColor: '#ef4444' }} />
            </View>
          )}
        />
      </View>
    </View>
  );
}

export const lesson08: Lesson = {
  id: 8,
  title: 'ActivityIndicator, Dumb Components, TouchableHighlight, FlatList',
  examples: [
    { id: 'activity-indicator', title: 'ActivityIndicator', description: 'Loading spinner, then content after 3 seconds.', Component: ActivityIndicatorExample },
    { id: 'dumb-components', title: 'Dumb Components', description: 'Presentational components that only render props.', Component: DumbComponentExample },
    { id: 'touchable-highlight', title: 'TouchableHighlight', description: 'Pressable with highlight colour and an alert.', Component: TouchableHighlightExample },
    { id: 'flatlist-basic', title: 'FlatList: basic', description: 'Render an array of strings with renderItem.', Component: FlatListFruitsExample },
    { id: 'flatlist-rows', title: 'FlatList: rows', description: 'Header, separator, empty state and row layout.', Component: FlatListTopicsExample },
  ],
};
