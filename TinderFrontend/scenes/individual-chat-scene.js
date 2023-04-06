import React from 'react';
import {
    SafeAreaView, Text
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const IndividualChatScene = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <Text>Individual Chat Screen</Text>
            <TouchableOpacity 
                onPress={() =>
                    navigation.navigate('MainScene')
                }
            >
                <Text>Back</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};
