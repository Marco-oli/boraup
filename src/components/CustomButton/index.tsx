import React from "react";
import {
  TouchableOpacity,
  StyleSheet,
  TouchableOpacityProps,
  ViewStyle,
  ActivityIndicator,
} from "react-native";
import { CustomText } from "../CustomText";
import { colors } from "../../assets/colors";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  loading?: boolean;
  disabled?: boolean;
  style?: ViewStyle | ViewStyle[];
};

export const CustomButton = ({
  title,
  loading = false,
  style,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.base,
        style,
        disabled && { backgroundColor: colors.placeholder },
      ]}
      activeOpacity={0.8}
      disabled={loading || disabled}
      {...props}
    >
      {loading ? (
        <ActivityIndicator color={colors.black} />
      ) : (
        <CustomText size={16} variant="bold" color={colors.white}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  base: {
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.button,
  },
});
