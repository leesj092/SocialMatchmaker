import React from 'react';
import {
    SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const ProfileInfo = (props) => {

    return (
        <View style={styles.profileInfoBox}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.value}>{props.value}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    profileInfoBox: {
        paddingHorizontal: "10%",
        paddingVertical: "3%"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
    },
    value: {
        fontSize: 18,
    }
});