import { StyleSheet, SafeAreaView } from 'react-native';
import HeadModules from 'components/HeadModules';
import ExerciseLauncher from 'components/ExerciseLauncher';
import { ScrollView } from 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { useRoute, RouteProp } from '@react-navigation/native';
import { StackExerciseLists } from 'navigation/stack-exercise-navigation';


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

  const quantidadePerguntas = 5; // Aqui vamos chamar a função aonde vai pegar a quantidade de exercicios de cada modulo

  const route = useRoute<RouteProp<StackExerciseLists, 'modules'>>();
  const { text } = route.params; 

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#3B2414' style="light" />

      <HeadModules titulo={text}/>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        {Array.from({ length: quantidadePerguntas }).map((_, index) => (
          <ExerciseLauncher
            key={index}
            exerciseId={(index + 1).toString()}
            title={`Exercício ${index + 1}`}
            circleCard={colorPalette[index % colorPalette.length]}
            moduleText={text}
            quantidadePerguntas={quantidadePerguntas} // Passando a quantidade de perguntas para o componente
          />
        ))}
      </ScrollView>
      {/* <CustomTabNavigator /> */}
      
    </SafeAreaView>
    
    
  );
};

export default ModulesPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF6E3',
  },
  scrollContent: {
    padding: 16,
  },
});