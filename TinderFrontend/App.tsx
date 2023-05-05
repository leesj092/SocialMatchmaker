import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScene } from './scenes/main-scene';
import { IndividualChatScene } from './scenes/individual-chat-scene';
import { LoginScene } from './scenes/login-scene';
import { SignupScene } from './scenes/signup-scene';
import { SignupDetailsScene } from './scenes/signup-details-scene';

function App(): JSX.Element {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="LoginScene"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LoginScene" component={LoginScene} />
        <Stack.Screen name="SignupScene" component={SignupScene} />
        <Stack.Screen name="MainScene" component={MainScene} />
        <Stack.Screen name="IndividualChatScene" component={IndividualChatScene} />
        <Stack.Screen name="SignupDetailsScene" component={SignupDetailsScene} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white',
  },
};

export default App;
