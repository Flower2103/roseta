// SettingsScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
       <Button
        title="Configuración de la cuenta"
        onPress={() => navigation.navigate('About')}
      />

      <Button
        title="Color del Tema"
        onPress={() => navigation.navigate('ChangeTheme')}
      />
       <Button
        title="Idioma"
        onPress={() => navigation.navigate('ChangeTheme')}
      />
      <Button
        title="Actualizaciones"
        onPress={() => navigation.navigate('FirmwareUpdates')}
      />
      <Button
        title="Soporte y Ayuda"
        onPress={() => navigation.navigate('Support')}
      />
      <Button
        title="Términos y condiciones"
        onPress={() => navigation.navigate('Support')}
      />
      <Button
        title="Política y privacidad"
        onPress={() => navigation.navigate('Privacy')}
      />
       <Button
        title="Acerca de"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

export default SettingsScreen;
