import { useCallback, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import 'react-native-get-random-values';
import { v4 as uuid } from "uuid";
import { AddInput } from './component/AddInput';
import { TodoItem } from './component/TodoItem';

const initialData = [
  {
    id: uuid(),
    label: "Buy groceries",
    isChecked: false,
  },
  {
    id: uuid(),
    label: "Reboot computer",
    isChecked: false,
  },
  {
    id: uuid(),
    label: "Ace the interview",
    isChecked: true,
  },
];

export default function App() {
  return(
    <SafeAreaProvider>
      <MainComponent />
    </SafeAreaProvider>
  )
}

function MainComponent() {
  const insets = useSafeAreaInsets();
  const [todos, setTodos] = useState(initialData);

  const addTodo = useCallback((label: string) => {
    setTodos((prev) => [
      {
        id: uuid(),
        label,
        isChecked: false,
      },
      ...prev,
    ]);
  }, []);

  const onPressItem = useCallback(() => {
    // handle the check/uncheck logic
  }, []);

  return (
      <View style={[{ paddingTop: insets.top }, styles.container]}>
        <Text style={styles.title}>Todo List Interview</Text>
        <AddInput onAdd={addTodo} />
        <View style={styles.listContainer}>
          <FlatList
            data={todos}
            renderItem={({ item }) => <TodoItem {...item} onPress={onPressItem} />}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
  },
  listContainer: {
    height: 400,
  }
});
