import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";
import useColor from "@/features/color";
import { Component } from "@/Types";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text } from "react-native";

const HomeScreen: Component = () => {
  const navigation = useNavigation<any>();
  const { backgroundColor, randomizeColor } = useColor();

  const onHistoryPress = () => {
    navigation.navigate("History");
  };

  return (
    <MainLayout backgroundColor={backgroundColor} onPress={randomizeColor}>
      <Text style={styles.header}>{"Hello there"}</Text>
      <Text style={styles.paragraph}>
        {"Press anywhere to randomize color"}
      </Text>
      <Button title="Show History" onPress={onHistoryPress} />
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
  },
  paragraph: {
    fontSize: 16,
  },
});

export default HomeScreen;
