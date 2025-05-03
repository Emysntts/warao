import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { StackExerciseLists } from 'navigation/stack-exercise-navigation';
type ExerciseCompProps = {
  text: string;
  image?: string;
  isUnlocked?: boolean;
  onPress?: () => void;
};

const ExerciseComp = (props: ExerciseCompProps) => {
  const [fonts] = useFonts({ Poppins_600SemiBold });
  const navigation = useNavigation<NavigationProp<StackExerciseLists>>();
  if (!fonts) return null;

  const handlePress = () => {
    if (props.isUnlocked) {
      navigation.navigate('modules', { text: props.text }); 
    } else {
      alert('Este módulo está bloqueado!');
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress} className="my-3">
      <View className="flex  w-full flex-row  items-center justify-between rounded-lg bg-white p-5">
        <View className="flex flex-row items-center gap-5">
          <View className="h-16 w-16 rounded-full bg-blue-950 " />
          <Text
            style={{
              fontFamily: 'Poppins_600SemiBold',
            }}
            className="text-warao-green-dark">
            {props.text}
          </Text>
        </View>
        {props.isUnlocked ? (
          <Ionicons name="lock-open-outline" size={28} color="#747F64" />
        ) : (
          <Ionicons name="lock-closed-outline" size={28} color="#747F64" />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default ExerciseComp;
