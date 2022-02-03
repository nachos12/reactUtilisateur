import { useColorScheme } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Liste } from './pages/Liste';
import { Ajouter } from './pages/Ajouter';

const Stack = createNativeStackNavigator();

export const App = () => {
	const scheme = useColorScheme();

	return (
		<NavigationContainer >
			<Stack.Navigator initialRouteName="List User">
				<Stack.Screen name="Liste" component={Liste} />
				<Stack.Screen name="Ajouter" component={Ajouter} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;