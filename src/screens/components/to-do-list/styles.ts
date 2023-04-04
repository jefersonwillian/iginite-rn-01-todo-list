import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#333333",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    padding: 5,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },
  button: {
    width: 50,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    borderRadius: 10,
    borderColor: "#4EA8DE",
    marginLeft: 10,
  },
  selectedItem: {
    textDecorationLine: "line-through",
    color: "#808080",
  },
});
