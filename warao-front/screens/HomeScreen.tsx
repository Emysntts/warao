import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import IntroCard from 'components/IntroCard/Index';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Alert } from 'react-native';
import { useEffect } from 'react';
import axios from 'axios';

import type { RootStackParamList } from '../navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('TabNavigator');
  };

  const handleCreateDatabase = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8000/palavras/criar-banco/');
      if (response.data.success) {
        console.log('Sucesso:', response.data.success);
      } else {
        console.log('Erro:', response.data.error || 'Erro desconhecido ao criar o banco.');
      }
    } catch (error: any) {
      console.error('Erro ao criar o banco:', error.message);
    }
  };

  useEffect(() => {
    handleCreateDatabase();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#3B2414" style="light" />
      <IntroCard onPress={handlePress} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B2414',
  },
});
