import React, { useState } from 'react';
import {
    SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ProfileTextfield } from '../components/profile-textfield';

export const SignupDetailsScene = () => {
    const navigation = useNavigation();
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [job, setJob] = useState("");
    const [hobbies, setHobbies] = useState("");
    const [buttonEnabled, setButtonEnabled] = useState(true);

    const signUp = async () => {
        setButtonEnabled(false);
        navigation.navigate("MainScene", {name:name, age:age, gender:gender, job:job, hobbies:hobbies});
      };

    return (
        <View style={styles.detailsPage}>

            <Text style={styles.welcomeText}>Fill in your details!</Text>

            <ProfileTextfield
                iconName="person"
                value={name}
                setValue={setName}
                placeholder="Name"
                width="85%"
            />

            <ProfileTextfield
                iconName="calendar"
                value={age}
                setValue={setAge}
                placeholder="Age"
                width="85%"
            />

            <ProfileTextfield
                iconName="transgender"
                value={gender}
                setValue={setGender}
                placeholder="Gender"
                width="85%"
            />

            <ProfileTextfield
                iconName="briefcase"
                value={job}
                setValue={setJob}
                placeholder="Job"
                width="85%"
            />

            <ProfileTextfield
                iconName="game-controller"
                value={hobbies}
                setValue={setHobbies}
                placeholder="Hobbies"
                width="85%"
            />

            <TouchableOpacity style={buttonEnabled ? styles.signupButtonActivated : styles.signupButton} onPress={signUp} disabled={!buttonEnabled}>
                <Text style={styles.signupButtonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    welcomeText: {
        color: "black",
        fontSize: 36,
        marginBottom: 10,
        fontWeight: "bold"
    },
    detailsPage: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
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
      marginTop: "5%",
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