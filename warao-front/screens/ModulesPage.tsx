import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const modules = [
  { id: 1, title: 'Saudações ao chegar e ao partir', color: '#5A4B81' },
  { id: 2, title: 'Saudações ao chegar e ao partir', color: '#F26D3D' },
  { id: 3, title: 'Saudações ao chegar e ao partir', color: '#6D7D4E' },
  { id: 4, title: 'Saudações ao chegar e ao partir', color: '#C97A5A' },
  { id: 5, title: 'Saudações ao chegar e ao partir', color: '#F2D28B' },
];

const ModulesPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Módulos</Text>
      <ScrollView>
        {modules.map((module) => (
          <View key={module.id} style={[styles.card, { backgroundColor: module.color }]}>
            <Text style={styles.cardTitle}>{module.title}</Text>
            <TouchableOpacity style={[styles.button, { backgroundColor: module.color }]}>
              <Text style={styles.buttonText}>Jogar</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ModulesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6E3', // Cor de fundo bege
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B2414',
    marginBottom: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});