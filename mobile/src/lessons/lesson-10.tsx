import { useState } from 'react';
import { Alert, Platform, Pressable, Switch, Text, View } from 'react-native';

import type { Lesson } from './types';

const card = {
  backgroundColor: '#fff',
  borderWidth: 1,
  borderColor: '#e2e8f0',
  borderRadius: 16,
  padding: 20,
} as const;

function Btn({ title, onPress }: { title: string; onPress: () => void }) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => ({
        backgroundColor: '#2563eb',
        opacity: pressed ? 0.8 : 1,
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
      })}>
      <Text style={{ color: '#fff', fontWeight: '600' }}>{title}</Text>
    </Pressable>
  );
}

/* 10 Switch: ON/OFF state with custom track and thumb colours */
function SwitchExample() {
  const [enabled, setEnabled] = useState(false);
  return (
    <View style={{ ...card, alignItems: 'center', gap: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: '700', color: enabled ? 'red' : 'green' }}>GeeksforGeeks</Text>
      <Switch
        trackColor={{ false: '#43f746', true: '#63dff2' }}
        thumbColor={enabled ? '#faf68c' : '#e243f7'}
        onValueChange={setEnabled}
        value={enabled}
      />
      <Text style={{ color: '#64748b' }}>Switch is {enabled ? 'ON' : 'OFF'}</Text>
    </View>
  );
}

/* 10.1 Alert.alert with Cancel / OK buttons and callbacks */
function AlertButtonsExample() {
  const [result, setResult] = useState('No button pressed yet');

  const show = () => {
    if (Platform.OS === 'web') {
      // Alert.alert is a no-op on web, so confirm() stands in for Cancel / OK.
      setResult(window.confirm('GeeksforGeeks\nHow are you!') ? 'OK Pressed' : 'Cancel Pressed');
      return;
    }
    Alert.alert('GeeksforGeeks', 'How are you!', [
      { text: 'Cancel', style: 'cancel', onPress: () => setResult('Cancel Pressed') },
      { text: 'OK', onPress: () => setResult('OK Pressed') },
    ]);
  };

  return (
    <View style={{ gap: 12 }}>
      <Btn title="Click me" onPress={show} />
      <View style={card}>
        <Text style={{ fontSize: 18, color: '#0f172a' }}>{result}</Text>
      </View>
    </View>
  );
}

/* 10.1.1 Alert.prompt: a dialog with a text field (iOS only in React Native) */
function AlertPromptExample() {
  const [text, setText] = useState('');

  const show = () => {
    if (Platform.OS === 'ios') {
      Alert.prompt('Enter Name', 'Please enter your name', (value) => setText(value), 'plain-text', '');
    } else if (Platform.OS === 'web') {
      setText(window.prompt('Enter Name', '') ?? '');
    } else {
      Alert.alert('Not supported', 'Alert.prompt only works on iOS.');
    }
  };

  return (
    <View style={{ gap: 12 }}>
      <Btn title="Open prompt" onPress={show} />
      <View style={card}>
        <Text style={{ fontSize: 18, color: '#0f172a' }}>You entered: {text || '—'}</Text>
        <Text style={{ marginTop: 8, color: '#64748b' }}>
          Alert.prompt is iOS-only. On web this uses window.prompt as a stand-in.
        </Text>
      </View>
    </View>
  );
}

export const lesson10: Lesson = {
  id: 10,
  title: 'Switch and Alert API',
  examples: [
    { id: 'switch', title: 'Switch', description: 'Toggle ON/OFF with custom track and thumb colours.', Component: SwitchExample },
    { id: 'alert-buttons', title: 'Alert.alert', description: 'A dialog with Cancel and OK buttons and callbacks.', Component: AlertButtonsExample },
    { id: 'alert-prompt', title: 'Alert.prompt', description: 'A dialog with a text input (iOS only).', Component: AlertPromptExample },
  ],
};
