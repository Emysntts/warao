import {StyleSheet, SafeAreaView } from 'react-native';
import CustomTabNavigator from 'components/CustomTabNavigator';
import HeadModules from 'components/HeadModules';
import ExerciseLauncher from 'components/ExerciseLauncher';
import { ScrollView } from 'react-native-gesture-handler';


const ModulesPage = () => {

  const colorPalette = [  
    '#5A4B81', // Roxo
    '#FF6B35', // Laranja
    '#6B8E23', // Verde
    '#D2691E', // Marrom
    '#FFD700', // Amarelo
    '#FCE2A9', // Bege
    '#8A2BE2', // Azul
    '#FF4500', // Vermelho
  ];

  return (
    <SafeAreaView style={styles.container}> 

        <HeadModules />

        <ScrollView style={styles.content}>
          {colorPalette.map((color, index) => (
            <ExerciseLauncher
              key={index}
              exerciseId={(index + 1).toString()}
              title={`Exercício ${index + 1}`}
              circleCard={color}
            />
          ))}
      </ScrollView>

        <CustomTabNavigator />
    </SafeAreaView>
  );
};

export default ModulesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6E3', 
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