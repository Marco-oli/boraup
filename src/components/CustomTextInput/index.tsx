import React, { forwardRef, useState } from "react";
import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { colors } from "../../assets/colors";

type CustomTextInputProps = TextInputProps & {
  isPassword?: boolean;
};

export const CustomTextInput = forwardRef<TextInput, CustomTextInputProps>(
  ({ isPassword = false, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);

    return (
      <TextInput
        ref={ref}
        style={[
          styles.container,
          isFocused && { borderWidth: 1, borderColor: colors.button },
        ]}
        secureTextEntry={isPassword}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholderTextColor={colors.placeholder}
        autoCapitalize="none"
        {...props}
      />
    );
  }
);

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 50,
    paddingLeft: 20,
    borderRadius: 8,
    backgroundColor: colors.input,
  },
});
