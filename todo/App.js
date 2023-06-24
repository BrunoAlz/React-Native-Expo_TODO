import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";

import Item from "./components/Item";
import InputText from "./components/TextInput";

export default function App() {
  const [list, setList] = useState([]);

  function addObjectiveHandler(enteredText) {
    setList((currentList) => [
      ...currentList,
      { text: enteredText, id: Math.random().toString() },
    ]);
  }

  function deleteObjective(id) {
    setList((currentList) => {
      return currentList.filter((objective) => objective.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <InputText onAddGoal={addObjectiveHandler} />
      <View style={styles.listContainer}>
        <Text>Objetivos Atuais:</Text>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return (
              <Item
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteItem={deleteObjective}
              />
            );
          }}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  listContainer: {
    flex: 5,
    marginBottom: 20,
  },
});
