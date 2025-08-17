import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen";
import { UserInfoScreen } from "../screens/UserInfoScreen";

export type RootStackParamList = {
  Login: undefined;
  UserInfo: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Routes = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="UserInfo" component={UserInfoScreen} />
    </Stack.Navigator>
  );
};
