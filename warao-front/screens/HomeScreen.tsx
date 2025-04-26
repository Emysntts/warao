import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation';
import IntroCard from 'components/IntroCard/Index';
import { StatusBar } from 'expo-status-bar';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('TabNavigator');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#3B2414' style="light" />
      <IntroCard onPress={handlePress} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3B2414', // Fundo marrom

  },
});
