import {
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Item(props) {
  return (
    <View style={styles.listItens}>
      <Text style={styles.listText}>{props.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
