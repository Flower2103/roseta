import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, View, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const devices = [
  { id: '1', name: 'Luz del Salón', status: 'Encendida', type: 'light' },
  { id: '2', name: 'Termostato', status: '22°C', type: 'thermostat' },
  { id: '3', name: 'Cámara de Seguridad', status: 'Activa', type: 'camera' },
  { id: '4', name: 'Sensor de Humo', status: 'Normal', type: 'smoke' },
];

const HomeScreen = () => {
  const [deviceStates, setDeviceStates] = useState(devices.map(device => ({ ...device, isOn: true })));
  const navigation = useNavigation();

  const toggleDevice = (id) => {
    setDeviceStates(prevStates => 
      prevStates.map(device => 
        device.id === id ? { ...device, isOn: !device.isOn } : device
      )
    );
  };

  const renderDevice = ({ item }) => (
    <View style={styles.deviceCard}>
      <Text style={styles.deviceName}>{item.name}</Text>
      <Text style={styles.deviceStatus}>{item.isOn ? "Encendida" : "Apagada"}</Text>
      
      {/* Icono del foco solo para Luz del Salón */}
      {item.type === 'light' ? (
        <Ionicons
          name={item.isOn ? "bulb" : "bulb-outline"}
          size={50}
          color={item.isOn ? "#FFD700" : "#555"}
          onPress={() => {
            toggleDevice(item.id);
            navigation.navigate('Thermostat Control'); // Cambia esto según el tipo
          }}
        />
      ) : item.type === 'thermostat' ? (
        <Ionicons
          name="thermometer"
          size={50}
          color="#555"
          onPress={() => navigation.navigate('Thermostat Control')}
        />
      ) : item.type === 'camera' ? (
        <Ionicons
          name="camera"
          size={50}
          color="#555"
          onPress={() => navigation.navigate('Camera Control')}
        />
      ) : (
        <Ionicons
          name="alert-circle"
          size={50}
          color="#555"
          onPress={() => navigation.navigate('Smoke Sensor Control')}
        />
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bienvenido a tu Roseta Inteligente</Text>
      <FlatList
        data={deviceStates}
        renderItem={renderDevice}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.deviceList}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  deviceList: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  deviceCard: {
    backgroundColor: '#fff',
    paddingVertical: 15,
    paddingHorizontal: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3,
    alignItems: 'center',
    width: '90%', // Ajustar el ancho para que sea más pequeño
    flexDirection: 'column',
    justifyContent: 'center',
    
  },
  deviceName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  deviceStatus: {
    fontSize: 16,
    color: '#555',
    marginBottom: 10,
  },
});

export default HomeScreen;
