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

export const MatchedList = () => {
    return (
        <FlatList
            data={DATA}
            renderItem={({ item }) =>
                <TouchableOpacity>
                    <View style={styles.profileIcon}>
                        <Ionicons name={"person"} size={40} color={"gray"} />
                    </View>
                    <Text>Name</Text>
                </TouchableOpacity>
            }
            keyExtractor={item => item.id}
            horizontal={true}
        />
    );
};

const styles = StyleSheet.create({
    profileIcon: {
        borderStyle: "solid",
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 100,
        padding: 10,
        marginRight: 20,
    }
});