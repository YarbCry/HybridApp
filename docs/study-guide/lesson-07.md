# Lesson 7: React Native components

## What React Native is
A framework (by Meta) to build iOS and Android apps in JavaScript/React from one codebase. `View` and `Text` become real native widgets, not a web view. Expo is the toolchain that runs and builds the project (`npx expo start`).

## Core components
| Component | Use |
|---|---|
| `View` | container / layout box |
| `Text` | shows text (all text must be inside it) |
| `Image` | picture |
| `ScrollView` | scrollable content |
| `FlatList` | long lists, only renders what is visible |
| `TextInput`, `Button` | input and action (lesson 9) |

```tsx
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'green' }}>
  <Text style={{ color: 'white' }}>GeeksForGeeks</Text>
</View>
```

## Alert and Button
`Alert.alert('Title')` shows a native dialog. `<Button title="Press Me" onPress={...} color="green" />` is the simplest tappable button.

## ScrollView vs FlatList
- **ScrollView** renders every child at once. Good for a short list.
- **FlatList** renders rows lazily (`data`, `renderItem`, `keyExtractor`). Use it for long lists.
- The book's **ListView is removed**; FlatList replaces it.
- ScrollView needs a bounded height to scroll inside a screen.

## Navigation
- **Tab navigation**: switch between screens with a bar. Here, in-screen tabs show the idea with `useState`; the real thing is Expo Router tabs / `createBottomTabNavigator`.
- **Drawer navigation**: a side menu. Implemented with Expo Router's `Drawer` in `app/drawer-demo/`. Open it with a button or a swipe from the left edge.

## Check yourself
1. Why can't you put a bare string inside a `View`?
2. When would you pick FlatList over ScrollView?
3. What does `flex: 1` do?
