import { View, Text, Button } from 'react-native';
import React from 'react';
import Navbar from '../Composant/Navbar'

export const Home = ({ route, navigation }) => {
    const {nom} = route.params || "";

    return (
        <View>
            <Navbar navigation={navigation}></Navbar>
            <Text>Page home merci</Text>
            <Text>bonjour {JSON.stringify(nom)}</Text>
        </View>
    );
};

export default Home;
