import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Pressable,
  TouchableOpacity,
  KeyboardAvoidingView,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import { LoginNavBar } from '../components/login-navbar';
import { EmailField } from '../components/email-field';
import { PasswordField } from '../components/password-field';

export const LoginScene = () => {
  const navigation = useNavigation();
  const [email, setEmail] = React.useState('');
  const [seePassword, onChangeIcon] = React.useState(false);
  const [password, setPassword] = React.useState('');
  const [buttonEnabled, setButtonEnabled] = React.useState(false);
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const eyeIconSize = 20;

  React.useEffect(() => {
    if (email != '' && password != '') {
      setButtonEnabled(true);
    }
    else {
      setButtonEnabled(false);
    }
  });

  const signIn = () => {
    navigation.navigate("MainScene");
  };

  return (
    <LoginNavBar navigation={navigation}>
      <KeyboardAvoidingView behavior="position" style={styles.loginBox}>
        <View>
          <Text style={styles.welcomeText}>Welcome Back</Text>
          <Text>
            Don't have an account?{' '}
            <Text
              style={styles.signUpText}
              onPress={() => navigation.navigate('SignupScene')}>
              Sign Up for one!
            </Text>
          </Text>
        </View>

        <EmailField email={email} onChangeText={setEmail} />

        <PasswordField password={password} placeholder="Password" onChangeText={setPassword} />

        <Text style={styles.errorMessage}>{errorMessage}</Text>

        <TouchableOpacity
          style={buttonEnabled ? styles.loginButtonActivated : styles.loginButton}
          title="Login"
          onPress={signIn}
          disabled={!buttonEnabled}>
          {isLoading ?
            <ActivityIndicator />
            :
            <Text style={styles.loginButtonText}>Login</Text>
          }
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={() => navigation.navigate('ForgetPasswordScreen')}>
          <Text style={styles.forgotPassword}>Forgot Password?</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      <View style={styles.policyBox}>
        <Text style={styles.policyText}>
          By logging in, you agree to our Privacy Policy and Terms
        </Text>
      </View>
    </LoginNavBar>
  );
};

const styles = StyleSheet.create({
  loginBox: {
    marginHorizontal: 20,
    flex: 1,
    marginVertical: "20%",
  },
  welcomeText: {
    color: 'black',
    fontSize: 36,
    marginBottom: 10,
  },
  errorMessage: {
    color: 'red',
    paddingVertical: '3%',
  },
  loginButton: {
    backgroundColor: '#ffb6c1',
    borderRadius: 30,
    width: 340,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    opacity: 0.5,
  },
  loginButtonActivated: {
    backgroundColor: 'pink',
    borderRadius: 30,
    width: 340,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    opacity: 1,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    justifyContent: 'center',
    alignSelf: 'flex-end',
  },
  forgotPassword: {
    paddingVertical: '5%',
    color: 'black',
    textDecorationLine: 'underline',
  },
  policyBox: {
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  policyText: {
    textAlign: 'center',
    color: 'grey',
  },
  signUpText: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
  },
});

const firebaseErrors = {
  'auth/user-not-found': 'No user corresponding to this email',
  'auth/wrong-password': 'Wrong password',
};