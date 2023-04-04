import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerOne: {
    backgroundColor: "#0D0D0D",
    padding: 24,
    position: "relative",
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  containerTwo: {
    flex: 1,
    backgroundColor: "#1A1A1A",
    padding: 24,
    paddingTop: 80,
  },
  containerLogo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    marginBottom: 50,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    position: "absolute",
    bottom: -25,
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#262626",
    borderRadius: 5,
    color: "#fff",
    padding: 16,
    fontSize: 16,
    marginRight: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#1E6F9F",
    justifyContent: "center",
    alignItems: "center",
  },
  listEmptyTextBold: {
    color: "#808080",
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  listEmptyText: {
    color: "#808080",
    fontSize: 16,
    textAlign: "center",
  },
  iconCliboard: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },
  boxData: {
    borderBottomWidth: 2,
    borderBottomColor: "#333333",
    justifyContent: "space-between",
    flexDirection: "row",
    marginBottom: 50,
    paddingBottom: 20,
  },
  lineData: {
    flexDirection: "row",
    alignItems: "center",
  },
  maidsText: {
    color: "#4EA8DE",
    fontSize: 16,
    fontWeight: "bold",
  },
  numberResult: {
    color: "#fff",
    fontSize: 16,
  },
  completedText: {
    color: "#8284FA",
    fontSize: 16,
    fontWeight: "bold",
  },
  circle: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#333333",
    marginLeft: 10,
    width: 25,
    height: 19,
  },
});
