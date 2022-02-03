import { View, Text, Button, TouchableOpacity, Pressable, ImageBackground } from 'react-native';
import React from 'react';
export const Navbar = ({ navigation }) => {

    const handleHome = () => {
        navigation.navigate('Home', { nom: "laurent" })
    }
    const handleMonCompte = () => {
        navigation.navigate('MonCompte')
    }
    const handleTest = () => {
        navigation.navigate('Test')
    }

    return (
        <View>
            <Pressable
                style={({ pressed }) => ({ backgroundColor: pressed ? "grey" : "white" })}
                onPress={handleHome}
            >
                <Text> page Home</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => ({ backgroundColor: pressed ? "grey" : "white" })}
                onPress={handleMonCompte}
            >
                <Text> MonCompte</Text>
            </Pressable>

            <Pressable
                style={({ pressed }) => ({ backgroundColor: pressed ? "grey" : "white" })}
                onPress={handleTest}
            >
                <Text> page test</Text>
            </Pressable>

        </View>
    );
};


export default Navbar;
