import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const PasswordField = props => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  

  return (
    <View style={props.error ? styles.passwordSectionError : styles.passwordSection}>
      <TextInput
        style={styles.inputPassword}
        onChangeText={props.onChangeText}
        value={props.password}
        placeholder={props.placeholder}
        placeholderTextColor="grey"
        secureTextEntry={!passwordVisible}
      />
      <Ionicons
        style={styles.eyeIcon}
        name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
        size={styles.eyeIcon.size}
        onPress={() => setPasswordVisible(!passwordVisible)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputPassword: {
    padding: "5%",
    fontSize: 16,
    width: "80%",
  },
  passwordSectionError: {
    marginTop: "5%",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "red",
  },
  passwordSection: {
    marginTop: "5%",
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  eyeIcon: {
    padding: "5%",
    size: 20,
  },
});
