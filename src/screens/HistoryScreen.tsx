import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";
import useColor from "@/features/color";
import useHistory from "@/features/history";
import { Component } from "@/Types";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, FlatList, Text } from "react-native";

const HistoryScreen: Component = () => {
  const navigation = useNavigation();
  const { backgroundColor, randomizeColor } = useColor();
  const { history, clear } = useHistory();

  const onBackPress = () => {
    navigation.goBack();
  };

  const onClearPress = () => {
    if (clear) clear();
  };

  return (
    <MainLayout backgroundColor={backgroundColor} onPress={randomizeColor}>
      <FlatList
        data={history}
        style={styles.list}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={[styles.text, { color: item.color }]}>
              {item.color}
            </Text>
            <Text style={[styles.text, { color: item.color }]}>
              {new Date(item.timestamp).toLocaleString("pl")}
            </Text>
          </View>
        )}
      />
      <View style={styles.buttons}>
        <Button title="Go Back" onPress={onBackPress} />
        <Button title="Clear History" onPress={onClearPress} />
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  entry: {
    padding: 16,
    gap: 16,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  text: { fontSize: 16 },
  list: { flex: 1 },
  listContainer: { flex: 1 },
  buttons: {
    flexDirection: "row",
    gap: 8,
  },
});

export default HistoryScreen;
