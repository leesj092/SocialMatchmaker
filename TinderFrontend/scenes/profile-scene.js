import React from 'react';
import {
    SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ProfileInfo } from '../components/profile-info';

export const ProfileScene = () => {
    const navigation = useNavigation();

    const logout = () => {
        navigation.navigate("LoginScene");
    }

    return (
        <SafeAreaView style={styles.entireScene}>
            <View style={styles.topBox}>
                <View style={styles.settingsIcon}>
                    <TouchableOpacity>
                        <Ionicons name="settings-sharp" size={40}></Ionicons>
                    </TouchableOpacity>
                </View>
                <Image style={styles.profilePic} source={require('../images/sample_person.jpeg')} />
                <View style={styles.editIcon}>
                    <TouchableOpacity>
                        <Ionicons name="create-outline" size={40}></Ionicons>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.middleBox}>
                <ProfileInfo title="Name" value="Ming Loh"></ProfileInfo>
                <ProfileInfo title="Age" value="23"></ProfileInfo>
                <ProfileInfo title="Gender" value="Male"></ProfileInfo>
                <ProfileInfo title="Job" value="Student, Freelance programmer"></ProfileInfo>
                <ProfileInfo title="Hobbies" value="Swimming, Hiking, Playing poker"></ProfileInfo>
            </View>
            <View style={styles.bottomBox}>
                <TouchableOpacity
                    style={styles.loginButton}
                    title="Logout"
                    onPress={logout}>
                    <Text style={styles.loginButtonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    entireScene: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center"
    },
    topBox: {
        flex: 3,
        justifyContent: "center",  
        alignItems: "center",
        width: "100%"
    },
    middleBox: {
        flex: 4,
        width: "100%",
        marginTop: "5%",
        backgroundColor: "#F3CFC6",
        borderRadius: 20
    },
    bottomBox: {
        flex: 1,
    },
    settingsIcon: {
        alignSelf: "flex-end",
        paddingHorizontal: "5%",
    },
    editIcon: {
        alignSelf: "flex-start",
        paddingLeft: "10%",
    },
    profilePic: {
        borderRadius: 20,
        height: 200,
        width: 200
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
