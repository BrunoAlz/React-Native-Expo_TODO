import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList,
} from "react-native";

import Item from "./components/Item";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [list, setList] = useState([]);

  function objectiveInputHandler(enteredText) {
    setInputText(enteredText);
  }

  function addObjectiveHandler() {
    setList((currentList) => [
      ...currentList,
      { text: inputText, key: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Insira um Objetivo"
          onChangeText={objectiveInputHandler}
        />
        <Button title="Adicionar" onPress={addObjectiveHandler} />
      </View>
      <View style={styles.listContainer}>
        <Text>Objetivos Atuais:</Text>
        <FlatList
          data={list}
          renderItem={(itemData) => {
            return <Item text={itemData.item.text} />;
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

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccfff",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },

  listContainer: {
    flex: 5,
    marginBottom: 20,
  },
});
