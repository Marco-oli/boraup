import { View, Text } from "react-native";
import { StyleSheet } from "react-native";

export const UserInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text>UserInfoScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
