import { View, Text, Button } from 'react-native';
import React from 'react';
import Navbar from '../Composant/Navbar'
export const MonCompte = ({ navigation }) => {
    return (
        <View>
            <Navbar navigation={navigation}></Navbar>
            <Text>MonCompte</Text>
            <Button
                title="retour"
                onPress={() =>
                    navigation.goBack()
                }
            />
        </View>
    );
};

export default MonCompte;
