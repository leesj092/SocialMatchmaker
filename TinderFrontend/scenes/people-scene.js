import React from 'react';
import {
    SafeAreaView, Text, StyleSheet, View
} from 'react-native';
import { MatchedList } from '../components/matched-list';
import { ChatList } from '../components/chat-list';

export const PeopleScene = () => {
    return (
        <SafeAreaView style={styles.screenLayout} >
            <View style={styles.matchedList}>
                <MatchedList />
            </View>
            <SafeAreaView style={styles.chatList}>
                <ChatList />
            </SafeAreaView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screenLayout : {
        flex: 1,
        justifyContent: "center",
        alignItems: 'flex-start',
    },
    matchedList: {
        marginTop: 20,
        paddingHorizontal: 20,
        flex: 1
    },
    chatList: {
        flex: 5
    }
});