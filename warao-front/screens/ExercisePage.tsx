import ExerciseComp from 'components/Exercise';
import { Platform } from 'expo-modules-core';
import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native-gesture-handler';
export const ExercisePage = () => {
  return (
    <>
      <ScrollView className="bg-warao-sandcolor flex h-full flex-col p-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <ExerciseComp key={i} text="Saudações" isUnlocked />
        ))}
      </ScrollView>
      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </>
  );
};
export default ExercisePage;
