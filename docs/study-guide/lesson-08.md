# Lesson 8: ActivityIndicator, dumb components, TouchableHighlight, FlatList

## ActivityIndicator (8.1-8.2)
A spinning loader that tells the user work is in progress.

```tsx
const [loading, setLoading] = useState(true);
useEffect(() => { setTimeout(() => setLoading(false), 3000); }, []);
return loading ? <ActivityIndicator size="large" color="blue" /> : <Text>Loaded!</Text>;
```
Props: `animating`, `color`, `size` (`'small'` | `'large'`), `hidesWhenStopped` (iOS), `style`.
`useEffect(fn, [])` runs once after the first render, which is where you start a timer or fetch.

## Dumb components (8.3)
Also called presentational components. They only **show UI from props**: no state, no business logic. Easy to reuse and test.

```tsx
function Greeting(props) { return <View><Text>Hello, {props.name}</Text></View>; }
<Greeting name="Rahul" />
```
The *parent* owns the data and passes it down. Rule of thumb: buttons, cards and rows should be dumb.

## TouchableHighlight (8.4)
Makes any child pressable and gives visual feedback (dims, shows an underlay colour).

```tsx
<TouchableHighlight onPress={...} activeOpacity={0.5} underlayColor="#67c904" style={styles.touchable}>
  <Text>Click Me!</Text>
</TouchableHighlight>
```
Props: `onPress`, `onLongPress`, `underlayColor`, `activeOpacity`, `disabled`, `delayPressIn/Out`, `style`. It takes **one** child. For new code, `Pressable` (lesson 9) is the modern choice.

## FlatList (8.5)
```tsx
<FlatList data={fruits} renderItem={({ item }) => <Text>{item}</Text>} keyExtractor={(item, i) => i.toString()} />
```
- `data`: the array. `renderItem`: how to draw one row. `keyExtractor`: a unique key per row.
- Extras used in the app: `ListHeaderComponent`, `ListFooterComponent`, `ListEmptyComponent`, `ItemSeparatorComponent`, `numColumns`, `horizontal`, `onRefresh`/`refreshing` (pull to refresh), `extraData` (force re-render when outside state changes).
- Methods: `scrollToEnd()`, `scrollToIndex()`.

## Check yourself
1. What makes a component "dumb"?
2. Why does FlatList need `keyExtractor`?
3. What does `useEffect(..., [])` do?
