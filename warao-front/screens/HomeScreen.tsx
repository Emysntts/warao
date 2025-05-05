import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';
import IntroCard from 'components/IntroCard/Index';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet } from 'react-native';

import type { RootStackParamList } from '../navigation';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;

const HomeScreen = () => {
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handlePress = () => {
    navigation.navigate('PresentationPage');
  };

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
