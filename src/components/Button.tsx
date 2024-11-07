import { Component } from "@/Types";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  onPress?: () => void;
};

const Button: Component<Props> = ({ title, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#000",
    borderRadius: 8,
  },
  title: { fontSize: 16, color: "#fff" },
});

export default Button;
