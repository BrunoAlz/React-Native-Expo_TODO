import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

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
            return (
              <View style={styles.listItens}>
                <Text style={styles.listText}>{itemData.item.text}</Text>
              </View>
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

  listItens: {
    margin: 5,
    padding: 8,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
    fontSize: 18,
  },

  listText: {
    color: "white",
  },
});
