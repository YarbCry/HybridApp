# Lesson 10: Switch and Alert API

## Switch (10)
A two-state toggle (ON/OFF), common in settings screens. It is a **controlled component**: you own the value.

```tsx
const [enabled, setEnabled] = useState(false);
<Switch value={enabled} onValueChange={setEnabled}
  trackColor={{ false: '#43f746', true: '#63dff2' }} thumbColor={enabled ? '#faf68c' : '#e243f7'} />
```
Props: `value`, `onValueChange` (receives the new boolean), `disabled`, `trackColor`, `thumbColor`, `ios_backgroundColor`, `style`, `testID`.

## Alert API (10.1)
Native dialogs with a title, message and buttons.

```tsx
Alert.alert('GeeksforGeeks', 'How are you!', [
  { text: 'Cancel', style: 'cancel', onPress: () => ... },
  { text: 'OK', onPress: () => ... },
], { cancelable: true });
```
Parameters: `title`, `message`, `buttons` (array of `{ text, onPress, style }`), `options`.

| Method | Notes |
|---|---|
| `Alert.alert()` | main one |
| `Alert.prompt()` | dialog with a text field, **iOS only** |
| `Alert.dismissAll()` | close shown alerts |

`Alert.prompt(title, message, callbackOrButtons, type, defaultValue, keyboardType)`; `type` is `plain-text`, `secure-text` or `login-password`.

## Gotchas
- `Alert.alert` does **nothing on web**; the app falls back to `window.alert` / `confirm` / `prompt` (`mobile/src/lessons/alert.ts`).
- Button `onPress` callbacks are how you react to the user's choice (confirm a delete, cancel, etc.).

## Check yourself
1. Why is Switch called a controlled component?
2. How do you react to the OK button in `Alert.alert`?
3. Which platform supports `Alert.prompt`?
