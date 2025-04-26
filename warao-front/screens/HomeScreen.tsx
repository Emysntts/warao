import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../navigation';
import IntroCard from 'components/IntroCard/Index';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('TabNavigator');
  };

  return (
    <View style={styles.container}>
      <IntroCard onPress={handlePress} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
