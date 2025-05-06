import { useFonts, Poppins_500Medium } from '@expo-google-fonts/poppins';
import { useState } from 'react';
import { Modal, View, Text } from 'react-native';
import { StoreData } from 'store/AsyncStorageUtils';

import { Button } from './Button';
import { Input } from './Input';

type ConfigModalProps = {
  initial_value?: string;
  isVisible?: boolean;
  onConfirm?: (username: string) => void;
  onCancel?: () => void;
};

export const ConfigModal = (props: ConfigModalProps) => {
  const [fonts] = useFonts({ Poppins_500Medium });
  const [newUsername, setNUsername] = useState('');

  if (!fonts) return null;

  return (
    <Modal animationType="slide" visible={props.isVisible} transparent>
      <View className="absolute top-[30%] flex w-full items-center justify-center px-5">
        <View className="flex w-full flex-col items-center justify-start gap-8  rounded-3xl bg-warao-sandcolor  p-5 shadow-md shadow-black">
          <Text
            style={{
              fontFamily: 'Poppins_500Medium',
            }}
            className="w-full text-center text-2xl  text-warao-brown">
            Mudança de nome
          </Text>
          <Input
            value={props.initial_value}
            onChange={setNUsername}
            label="Novo nome de usuário"
            placeholder="Seu nome"
          />
          <View className="flex flex-row gap-10">
            <Button
              title="Confirmar"
              onPress={() => props.onConfirm && props.onConfirm(newUsername)}
            />
            <Button title="Cancelar" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
