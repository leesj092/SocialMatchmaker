import React, { useEffect, useState } from 'react';
import {TextInput, StyleSheet} from 'react-native';

export const EmailField = (props) => {
  return (
    <TextInput
      style={props.error ? styles.error : styles.input}
      onChangeText={props.onChangeText}
      value={props.email}
      placeholder="Email"
      placeholderTextColor={styles.placeholder.textColor}
    />
  );
};

const styles = StyleSheet.create({
  error: {
    marginTop: "8%",
    marginBottom: "5%",
    borderWidth: 1,
    padding: "5%",
    fontSize: 16,
    borderColor: "red",
  },
  input: {
    marginTop: "8%",
    marginBottom: "5%",
    borderWidth: 1,
    padding: "5%",
    fontSize: 16,
  },
  placeholder: {
    textColor: 'grey',
  },
});