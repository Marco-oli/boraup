import { useEffect, useState, useCallback } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import { CustomText } from "../../components/CustomText";
import { colors } from "../../assets/colors";
import { getUserInfo } from "../../services/user";
import { useAuthStore } from "../../store/authStore";
import { CustomButton } from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const UserInfoScreen = () => {
  const { user, setUser, logout } = useAuthStore();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const fetchUser = useCallback(async () => {
    console.log("fetching user");
    try {
      const data = await getUserInfo();
      setUser(data);
    } catch (error) {
      console.log("Erro ao buscar usuário:", error);
    }
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      try {
        await fetchUser();
      } catch {
        logout();
        navigation.navigate("Login");
      }
    };

    checkUser();
    const interval = setInterval(checkUser, 5000);
    return () => clearInterval(interval);
  }, [fetchUser, logout, navigation]);

  const handleLogout = useCallback(() => {
    logout();
    navigation.navigate("Login");
  }, [logout]);

  if (!user) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.button} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CustomText
        size={30}
        variant="bold"
        color={colors.button}
        style={styles.title}
      >
        Seus Dados
      </CustomText>
      <View style={styles.card}>
        <CustomText size={18} variant="bold" color={colors.black}>
          Nome:
        </CustomText>
        <CustomText size={16} color={colors.black}>
          {user.name}
        </CustomText>

        <CustomText
          size={18}
          variant="bold"
          color={colors.black}
          style={styles.field}
        >
          Email:
        </CustomText>
        <CustomText size={16} color={colors.black}>
          {user.email}
        </CustomText>

        <CustomText
          size={18}
          variant="bold"
          color={colors.black}
          style={styles.field}
        >
          ID:
        </CustomText>
        <CustomText size={16} color={colors.black}>
          {user.id}
        </CustomText>
      </View>

      <CustomButton title="Logout" onPress={handleLogout} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    marginBottom: 30,
  },
  card: {
    width: "100%",
    backgroundColor: colors.input,
    padding: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 20,
  },
  field: {
    marginTop: 10,
  },
});
