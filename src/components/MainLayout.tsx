import { ComponentWithChildren } from "@/Types";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, View } from "react-native";

type Props = {
  backgroundColor: string;
  onPress?: () => void;
};

const MainLayout: ComponentWithChildren<Props> = ({
  children,
  backgroundColor,
  onPress,
}) => {
  return (
    <View
      onTouchStart={onPress}
      style={[styles.container, { backgroundColor }]}
    >
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: {
    flex: 1,
    gap: 16,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default MainLayout;
