import { useState } from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

export default function InputText(props) {
  const [inputText, setInputText] = useState("");

  function objectiveInputHandler(enteredText) {
    setInputText(enteredText);
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Insira um Objetivo"
        onChangeText={objectiveInputHandler}
      />
      <Button title="Adicionar" onPress={() => props.onAddGoal(inputText)} />
    </View>
  );
}

const styles = StyleSheet.create({
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
});
