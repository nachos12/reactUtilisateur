import { Button, Text, View } from 'react-native';
import React, { useState } from 'react';

export const Liste = ({ navigation }) => {
  const [utilisateur, setUtilisateur] = useState([]);

  const Ajouter = newUtilisateur => {
    setUtilisateur([...utilisateur, newUtilisateur]);
  };

  return (
    <View>
      {utilisateur.map(user => (
        <View>
          <Text>
            Nom : {user.nom} 
            {"\n"}
            Prenom : {user.prenom}
            {"\n"}
          </Text>
        </View>
      ))}
      <Button title="Ajouter un utilisateur" onPress={() =>
        navigation.navigate('Ajouter', { Ajouter: Ajouter })
      } />
      <Button title="Vider la liste" onPress={() =>
        setUtilisateur([])
      } />
    </View>
  );
};