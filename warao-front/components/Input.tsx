import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { View, TextInput, Text } from 'react-native';

interface InputProps {
  label: string;
  placeholder: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const Input: React.FC<InputProps> = ({ label, placeholder, onChange, value }) => {
  const [fonts] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });

  if (!fonts) return null;

  return (
    <View className="flex w-2/3 flex-col ">
      <Text
        style={{
          fontFamily: 'Poppins_500Medium',
        }}
        className="text-lg text-warao-brown">
        {label}
      </Text>

      <TextInput
        className="rounded-full border-2 border-warao-brown bg-transparent p-3 "
        placeholder={placeholder}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};
