import React from 'react';
import {
    SafeAreaView,
    Text,
    TouchableOpacity,
    FlatList,
    Image,
    StyleSheet,
    View
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d73',
        title: 'Third Item',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bc',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f65',
        title: 'Second Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d74',
        title: 'Third Item',
    },
];

export const ChatList = () => {
    const navigation = useNavigation();
    
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) =>
                <TouchableOpacity style={styles.chatBox} 
                    onPress={() =>
                        navigation.navigate('IndividualChatScene')
                    }
                >
                    <Ionicons name={"person"} size={40} color={"gray"} />
                    <View style={styles.chatInfo}>
                        <Text>John Doe</Text>
                        <Text style={{ color: "gray", marginTop: 3 }}>Thanks for connecting with me...</Text>
                    </View>
                    <View
                        style={{
                            borderBottomStyle: "solid",
                            borderBottomColor: 'black',
                            borderBottomWidth: 1,
                        }}
                    />
                </TouchableOpacity>
            }
            keyExtractor={item => item.id}
        />
    );
};

const styles = StyleSheet.create({
    chatBox: {
        flexDirection: "row",
        marginVertical: 10,
        paddingHorizontal: 20,
        justifyContent: "space-between",
        alignItems: "center"
    },
    chatInfo: {
        marginHorizontal: 40,
    },
    profileIcon: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        padding: 10,
        marginRight: 20,
    }
});