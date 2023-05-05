import React, { useState, useEffect } from 'react';
import type { Node } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
  ActivityIndicator,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Checkbox } from 'react-native-paper';
import { LoginNavBar } from '../components/login-navbar';
import { EmailField } from '../components/email-field';
import { PasswordField } from '../components/password-field';
import { constants } from 'react-native-scrollable-navigation-bar';

export const SignupScene = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isMet1, changeMet1] = useState("grey");
  const [isMet2, changeMet2] = useState("grey");
  const [isMet3, changeMet3] = useState("grey");
  const [checked, setChecked] = useState(false);
  const [buttonEnabled, setButtonEnabled] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const numberRegExp = /\d/;
  const scRegExp = /[$&+,:;=?@#|'<>.^*()%!-]/;

  const testAndSetPassword = (inputText) => {
    setPassword(inputText);

    if (inputText.length > 0) {
      changeMet1("red");
      changeMet2("red");
      changeMet3("red");
    } else {
      changeMet1("grey");
      changeMet2("grey");
      changeMet3("grey");
      return;
    }

    if (inputText.length >= 8) {
      changeMet1("pink");
    } else {
      changeMet1("red");
    }

    if (inputText.match(numberRegExp)) {
      changeMet2("pink");
    } else {
      changeMet2("red");
    }

    if (inputText.match(scRegExp)) {
      changeMet3("pink");
    } else {
      changeMet3("red");
    }
  };

  const signUp = async () => {
    setButtonEnabled(false);
    setIsLoading(true);
    navigation.navigate("SignupDetailsScene");
  };

  useEffect(() => {
    if (isMet1 === "pink" && isMet2 === "pink" && isMet3 === "pink" && email != "" && checked) {
      setButtonEnabled(true);
    }
    else {
      setButtonEnabled(false);
    }
  });

  return (
    <LoginNavBar navigation={navigation}>
      <KeyboardAvoidingView behavior="padding" style={styles.signupBox} keyboardVerticalOffset={constants.NAVIGATION_BAR_HEIGHT}>
        <View>
          <Text style={styles.welcomeText}>Create Account</Text>
          <Text>
            Already have an account?{' '}
            <Text
              style={styles.signUpText}
              onPress={() => navigation.navigate('LoginScene')}>
              Login
            </Text>
          </Text>
        </View>

        <EmailField email={email} onChangeText={setEmail} />

        <PasswordField password={password} placeholder="Password" onChangeText={testAndSetPassword} />
        
        <Text style={errorMessage == "" ? styles.noError : styles.errorMessage}>{errorMessage}</Text>

        <SafeAreaView style={styles.passwordRuleBox}>
          <Text
            style={
              isMet1 == "grey"
                ? styles.passwordUnset
                : isMet1 == "red"
                ? styles.passwordRuleFail
                : styles.passwordRule
            }>
            Must be at least 8 characters
          </Text>
          <Text
            style={
              isMet2 == "grey"
                ? styles.passwordUnset
                : isMet2 == "red"
                ? styles.passwordRuleFail
                : styles.passwordRule
            }>
            Must include a number
          </Text>
          <Text
            style={
              isMet3 == "grey"
                ? styles.passwordUnset
                : isMet3 == "red"
                ? styles.passwordRuleFail
                : styles.passwordRule
            }>
            Must include a special character
          </Text>
        </SafeAreaView>

        <SafeAreaView style={styles.checkboxArea}>
          <Checkbox.Android
            status={checked ? "checked" : "unchecked"}
            onPress={() => {
              setChecked(!checked);
            }}
            color={"black"}
            uncheckedColor={"black"}
          />
          <Text style={styles.tandcText}>
            I hereby acknowledge and agree to the Terms & Conditions
          </Text>
        </SafeAreaView>

        <TouchableOpacity style={buttonEnabled ? styles.signupButtonActivated : styles.signupButton} onPress={signUp} disabled={!buttonEnabled}>
          {isLoading ?
            <ActivityIndicator />
            :
            <Text style={styles.signupButtonText}>Sign Up</Text>
          }
        </TouchableOpacity>

      </KeyboardAvoidingView>
    </LoginNavBar>
  );
};

const styles = StyleSheet.create({
  signupBox: {
    marginHorizontal: 20,
    flex: 1,
    marginVertical: "20%",
  },
  welcomeText: {
    color: "black",
    fontSize: 36,
    marginBottom: 10,
  },
  signUpText: {
    color: "black",
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  noError: {
    visibility: "hidden",
  },
  errorMessage: {
    color: "red",
    paddingVertical: "3%",
  },
  passwordRule: {
    color: "#097969",
    fontSize: 12,
  },
  passwordRuleFail: {
    color: "red",
    fontSize: 12,
  },
  passwordUnset: {
    color: "grey",
    fontSize: 12,
  },
  checkboxArea: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  tandcText: {
    fontSize: 11,
  },
  signupButton: {
    backgroundColor: "#ffb6c1",
    borderRadius: 30,
    width: 340,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    opacity: 0.5,
  },
  signupButtonActivated: {
    backgroundColor: "pink",
    borderRadius: 30,
    width: 340,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    opacity: 1,
  },
  signupButtonText: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
});