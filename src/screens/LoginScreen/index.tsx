import { View, Text, StyleSheet } from "react-native";

export const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
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
