import { useCallback, useEffect, useRef, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { CustomTextInput } from "../../components/CustomTextInput";
import { colors } from "../../assets/colors";
import { CustomText } from "../../components/CustomText";
import { CustomButton } from "../../components/CustomButton";
import { login } from "../../services/auth";
import { useAuthStore } from "../../store/authStore";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../routes/routes";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export const LoginScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const emailRef = useRef<TextInput>(null);
  const { setTokens } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await login({ email, password });
      setTokens(response.accessToken, response.refreshToken);
      navigation.navigate("UserInfo");
    } catch (error) {
      console.log("deu erro ao logar");
    } finally {
      setIsLoading(false);
    }
  }, [email, password]);

  useEffect(() => {
    emailRef.current?.focus();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomText size={30} variant="bold" color={colors.button}>
          Login
        </CustomText>
        <CustomText size={20} variant="regular" color={colors.black} center>
          Entre com suas credenciais para continuar
        </CustomText>
      </View>

      <View style={styles.containerInputs}>
        <CustomTextInput
          ref={emailRef}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomTextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <CustomButton
        title="Login"
        onPress={handleLogin}
        loading={isLoading}
        disabled={isLoading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    alignItems: "center",
    gap: 26,
    marginBottom: 75,
  },
  containerInputs: {
    width: "100%",
    gap: 24,
    marginBottom: 40,
  },
});
