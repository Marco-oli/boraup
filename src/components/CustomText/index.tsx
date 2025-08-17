import { StyleProp, StyleSheet, Text, TextProps } from "react-native";
import { TextStyle } from "react-native";
import { colors } from "../../assets/colors";

type CustomTextProps = TextProps & {
  size?: number;
  variant?: "regular" | "bold";
  color?: string;
  center?: boolean;
  style?: StyleProp<TextStyle>;
};

export const CustomText = ({
  size = 14,
  variant = "regular",
  color = colors.black,
  center = false,
  style,
  children,
  ...props
}: CustomTextProps) => {
  const fontFamily = variant === "bold" ? "Lato_700Bold" : "Lato_400Regular";

  return (
    <Text
      {...props}
      style={[
        {
          fontSize: size,
          fontFamily,
          color,
          textAlign: center ? "center" : "left",
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};
