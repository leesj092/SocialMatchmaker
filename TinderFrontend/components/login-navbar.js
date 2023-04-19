import {AppleStyle} from 'react-native-scrollable-navigation-bar';
import React, {createContext} from 'react';
import {TouchableOpacity, Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ScrollEnabledContext = createContext(null);

export const LoginNavBar = ({children, title, navigation}) => {
  const backIconSize = 25;
  const backIconColor = '#616161';
  const windowHeight = Dimensions.get('window').height;
  const ENABLE_SCROLL_THRESHOLD = 450;

  return (
    <AppleStyle
      title={title}
      navigationBarBackgroundColor="white"
      borderColor="transparent"
      contentContainerStyle={{flex: 1}}
      scrollEnabled={windowHeight < ENABLE_SCROLL_THRESHOLD}
      leftIcons={[
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            size={backIconSize}
            color={backIconColor}
          />
        </TouchableOpacity>,
      ]}>
      {children}
    </AppleStyle>
  );
};
