# Study guide: React Native lessons 7-10

Notes to revise from. Each lesson maps to a book chapter and to a file in
`mobile/src/lessons/`, where every example is runnable in the app (Lessons tab).

| Lesson | Book chapter | Topics | Code |
|---|---|---|---|
| [7](lesson-07.md) | 7 | Core components, ScrollView, FlatList, tabs, drawer | `lesson-07.tsx` |
| [8](lesson-08.md) | 8 | ActivityIndicator, dumb components, TouchableHighlight, FlatList | `lesson-08.tsx` |
| [9](lesson-09.md) | 9 | AsyncStorage, Button, TextInput, Pressable | `lesson-09.tsx` |
| [10](lesson-10.md) | 10 | Switch, Alert API | `lesson-10.tsx` |

Run it: `cd mobile && npm start`, press `w` for web. Open **Lessons**, pick a lesson, tap an example.

## Ideas that repeat in every lesson

- **Component** = a function that returns UI. `View` is a box, `Text` shows text. Text must always be inside `<Text>`.
- **Props** = inputs to a component (`<Greeting name="Rahul" />`). Data flows parent to child.
- **State** = data a component remembers (`const [count, setCount] = useState(0)`). Calling `setCount` re-renders the component.
- **Styles** = plain objects (`StyleSheet.create` or inline). Layout uses **flexbox**: `flex: 1` fills space, `justifyContent` aligns along the main axis, `alignItems` across it. Default direction is column.
- **Events** = callbacks such as `onPress`, `onChangeText`, `onValueChange`.

## Web vs phone

The app also runs in a browser, where some native APIs do nothing. `Alert.alert` is silent on web, so the examples use `window.alert` / `confirm` / `prompt` there (see `mobile/src/lessons/alert.ts`). `Alert.prompt` only exists on iOS.
