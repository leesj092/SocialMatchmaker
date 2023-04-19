import React from 'react';
import {
    SafeAreaView, StyleSheet, Text, TouchableOpacity
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export const ProfileScene = () => {
    const navigation = useNavigation();

    const logout = () => {
        navigation.navigate("LoginScene");
    }

    return (
        <SafeAreaView style={styles.entireScene}>
            <TouchableOpacity
                style={styles.loginButton}
                title="Logout"
                onPress={logout}>
                <Text style={styles.loginButtonText}>Logout</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    entireScene: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    loginButton: {
        backgroundColor: 'pink',
        borderRadius: 30,
        width: 340,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        opacity: 1,
        marginVertical: 20,
    },
    loginButtonText: {
        color: 'black',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
