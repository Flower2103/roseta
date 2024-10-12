import React from 'react';
import { SafeAreaView, Text, StyleSheet, Button } from 'react-native';

const CameraControl = () => {
  const handleCameraToggle = () => {
    // Aquí puedes agregar la lógica para activar/desactivar la cámara
    alert("Cámara activada/desactivada");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Control de la Cámara de Seguridad</Text>
      <Button title="Activar/Desactivar Cámara" onPress={handleCameraToggle} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default CameraControl;
