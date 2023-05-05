import React from 'react';
import {useEffect} from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ProfileTextfield = ({iconName, setValue, value, placeholder}) => {
  let editable = true;
  let background = 'white';
  let iconColor = 'gray';

  return (
    <View style={{...styles.fieldContainer, backgroundColor: background}}>
      <Ionicons
        name={iconName}
        size={styles.icon.size}
        style={{...styles.icon, color: iconColor}}
      />
      <TextInput
        style={styles.input} 
        defaultValue={value}
        editable={editable}
        placeholder={placeholder}
        placeholderTextColor={styles.placeholder.textColor}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    flex: 1,
    padding: 10,
    fontSize: 14,
    color: 'black',
  },
  placeholder: {
    textColor: 'grey',
  },
  fieldContainer: {
    borderWidth: 1,
    borderRadius: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  icon: {
    padding: 10,
    size: 20,
  },
});
