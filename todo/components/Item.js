import { StyleSheet, Text, View, Pressable } from "react-native";

export default function Item(props) {
  return (
    <View style={styles.listItens}>
      <Pressable
        android_ripple={{ color: "#8c7bcc" }}
        onPress={() => props.onDeleteItem(props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.listText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  listItens: {
    margin: 5,
    borderRadius: 4,
    backgroundColor: "#5e0acc",
    fontSize: 18,
  },

  listText: {
    color: "white",
    padding: 8,
  },

  pressedItem: {
    opacity: 0.5,
  },
});
