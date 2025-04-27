import {StyleSheet, SafeAreaView } from 'react-native';
import CustomTabNavigator from 'components/CustomTabNavigator';
import HeadModules from 'components/HeadModules';

const modules = [
  { id: 1, title: 'Saudações ao chegar e ao partir', color: '#5A4B81' },
  { id: 2, title: 'Saudações ao chegar e ao partir', color: '#F26D3D' },
  { id: 3, title: 'Saudações ao chegar e ao partir', color: '#6D7D4E' },
  { id: 4, title: 'Saudações ao chegar e ao partir', color: '#C97A5A' },
  { id: 5, title: 'Saudações ao chegar e ao partir', color: '#F2D28B' },
];

const ModulesPage = () => {
  return (
    <SafeAreaView style={styles.container}> 
        <HeadModules />

      <CustomTabNavigator />
      
      
    </SafeAreaView>
  );
};

export default ModulesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6E3', // Cor de fundo bege
  },
  content: {
    flex: 1,
    padding: 16,
  },

  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3B2414',
    marginBottom: 16,
  },
 
});