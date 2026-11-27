# Lesson 9: AsyncStorage, Button, TextInput, Pressable

## AsyncStorage (9, 9.1)
Saves small key-value strings on the device. Data survives closing the app. All methods are **asynchronous** (return Promises), so use `await`.

```tsx
import AsyncStorage from '@react-native-async-storage/async-storage';
await AsyncStorage.setItem('username', 'Rahul');
const value = await AsyncStorage.getItem('username'); // string | null
```
| Method | Does |
|---|---|
| `setItem(key, value)` | save |
| `getItem(key)` | read (null if missing) |
| `removeItem(key)` | delete one |
| `clear()` | delete everything |
| `getAllKeys()` | list keys |
| `multiSet / multiGet / multiRemove` | several at once |

Install: `npx expo install @react-native-async-storage/async-storage`. Only strings are stored; use `JSON.stringify` / `JSON.parse` for objects. Good for settings and login info, not for large data. Wrap calls in `try/catch`.

## Button (9.2)
`<Button title="Click Me" onPress={fn} color="..." disabled />`. Limited styling. Counter pattern:

```tsx
const [count, setCount] = useState(0);
<Button title="Click Me" onPress={() => setCount(count + 1)} />
```

## TextInput (9.3)
A controlled input: the value lives in state.

```tsx
const [name, setName] = useState('');
<TextInput value={name} onChangeText={setName} placeholder="Enter Name" />
```
Useful props: `placeholder`, `secureTextEntry` (password), `keyboardType` (`numeric`, `email-address`), `maxLength`, `multiline`, `autoCapitalize`, `editable`. Events: `onChangeText`, `onSubmitEditing`, `onFocus`, `onBlur`.

## Pressable (9.4)
The flexible, modern press handler. Wrap any element.

```tsx
<Pressable onPress={...} onLongPress={...} onPressIn={...} onPressOut={...}>
  <Text>Press Me</Text>
</Pressable>
```
Its `style` can be a function of `{ pressed }` to change appearance while pressed. Compare: `Button` (fixed look), `TouchableHighlight` (older), `Pressable` (most control).

## Check yourself
1. Why must AsyncStorage calls use `await`?
2. What does "controlled input" mean?
3. When pick `Pressable` over `Button`?
