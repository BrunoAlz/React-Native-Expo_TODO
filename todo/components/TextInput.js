import { useState } from "react";
import { StyleSheet, View, Button, TextInput, Modal } from "react-native";

export default function InputText(props) {
  const [inputText, setInputText] = useState("");

  function objectiveInputHandler(enteredText) {
    setInputText(enteredText);
  }

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Insira um Objetivo"
          onChangeText={objectiveInputHandler}
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="Adicionar"
              onPress={() => props.onAddGoal(inputText)}
            />
          </View>
          <View style={styles.button}>
            <Button title="Cancelar" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#cccfff",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
    marginBottom: 8
  },

  buttonContainer: {
    flexDirection: "row"
  },

  button: {
    width: '40%',
    marginHorizontal: 8
  }
});
