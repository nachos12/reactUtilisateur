import { View, Text, Button, Pressable } from 'react-native';
import React from 'react';
import Navbar from '../Composant/Navbar'
export const Test = ({ navigation }) => {
    return (
        <View>
            <Navbar navigation={navigation}></Navbar>
            <Text>vers l'infinis et haut dela</Text>
            <Button
                title="retour"
                onPress={() =>
                    navigation.goBack()
                }
            />
            
        </View>
    );
};

export default Test;
