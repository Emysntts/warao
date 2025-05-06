import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import axios from 'axios';
import IntroCard from 'components/IntroCard/Index';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { GetData } from 'store/AsyncStorageUtils';
import { useStore } from 'store/store';

import type { RootStackParamList } from '../navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [loading, setLoading] = useState(true);
  const { setUsername } = useStore();

  const handlePress = () => {
    navigation.navigate('PresentationPage');
  };

  const handleCreateDatabase = async () => {
    try {
      const response = await axios.get('http://10.0.2.2:8000/api/criar-banco/');
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

  useEffect(() => {
    const fetchData = async () => {
      const username = await GetData('username');
      if (username) {
        setUsername(username);
        navigation.reset({
          index: 0,
          routes: [{ name: 'TabNavigator' }],
        });
      }
      setLoading(false); // Finaliza o carregamento
    };
    fetchData();
  }, []);

  if (loading) {
    return null; // Ou um indicador de carregamento
  }

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
