import { Ionicons } from '@expo/vector-icons';
import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Button } from 'components/Button';
import { ConfigModal } from 'components/ConfigModal';
import { Input } from 'components/Input';
import { RootStackParamList } from 'navigation';
import { useState } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { StoreData } from 'store/AsyncStorageUtils';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TabNavigator'>;

function ConfigPage() {
  const [fonts] = useFonts({ Poppins_500Medium });
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigation<HomeScreenNavigationProp>();

  if (!fonts) return null;

  const handleModalConfirm = async (username: string) => {
    await StoreData({
      key: 'username',
      value: username,
    });
    setModalVisible(false);
  };

  const handleLogout = async () => {
    await AsyncStorage.clear();
    navigate.reset({
      index: 0,
      routes: [
        {
          name: 'Home',
        },
      ],
    });
  };

  return (
    <View className="flex h-full w-full flex-col">
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        className="flex w-full flex-row items-center justify-start gap-3  px-5 py-4">
        <Ionicons name="settings" size={30} color="#3B2414" />
        <Text
          style={{
            fontFamily: 'Poppins_500Medium',
          }}
          className="text-xl text-warao-brown">
          Mudar nome de usuário
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handleLogout}
        className="flex w-full flex-row items-center justify-start gap-3  px-5 py-4">
        <Ionicons name="log-out" size={30} color="#3B2414" />
        <Text
          style={{
            fontFamily: 'Poppins_500Medium',
          }}
          className="text-xl text-warao-brown">
          Sair
        </Text>
      </TouchableOpacity>
      <ConfigModal
        isVisible={modalVisible}
        onConfirm={handleModalConfirm}
        onCancel={() => setModalVisible(false)}
      />
    </View>
  );
}

export default ConfigPage;
