import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'components/Button';
import { Input } from 'components/Input';
import { RootStackParamList } from 'navigation';
import { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { StoreData } from 'store/AsyncStorageUtils';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;

function PresentationPage() {
  const [fonts] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });

  const [username, setUsername] = useState('');

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleChange = (value: string) => {
    setUsername(value);
  };

  const handlePressButton = async () => {
    await StoreData({
      key: 'username',
      value: username,
    });

    navigation.navigate('TabNavigator');
  };

  if (!fonts) return null;

  return (
    <View className="flex h-full w-full flex-col items-center justify-start">
      <View className="flex h-96 w-full items-center justify-center rounded-b-[3rem] bg-warao-brown">
        <Image
          source={require('../assets/images/Logo.png')}
          className="h-64 w-64"
          resizeMode="contain"
        />
      </View>

      <View className="flex h-1/2 w-full flex-col items-center justify-center gap-8 ">
        <Text
          style={{
            fontFamily: 'Poppins_500Medium',
          }}
          className="text-2xl text-warao-brown">
          Antes de começarmos
        </Text>

        <Input
          label="Digite seu nome"
          placeholder="Seu nome aqui"
          onChange={handleChange}
          value={username}
        />

        <Button title="Prosseguir" onPress={handlePressButton} />
      </View>
    </View>
  );
}

export default PresentationPage;
