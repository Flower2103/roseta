import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

const NotificationsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Notificaciones</Text>
      {/* Aquí puedes mostrar alertas y notificaciones */}
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
  },
});

export default NotificationsScreen;
