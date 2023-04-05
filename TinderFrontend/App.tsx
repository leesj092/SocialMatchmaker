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

function App(): JSX.Element {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        initialRouteName="MainScene"
        screenOptions={{ headerShown: false }}>
        <Stack.Screen name="MainScene" component={MainScene} />
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
