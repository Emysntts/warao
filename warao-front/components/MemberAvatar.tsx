import { View, Text, Image, ImageSourcePropType } from 'react-native';

interface MemberAvatarProps {
  funcao: string;
  nome: string;
  imgUrl?: string;
  col_start?: string;
  row_start?: string;
}

function MemberAvatar(props: MemberAvatarProps) {
  return (
    <View className="flex flex-col items-center justify-center gap-2">
      <Text
        style={{
          fontFamily: 'Poppins_500Medium',
        }}>
        {props.funcao}
      </Text>
      {props.imgUrl ? (
        <Image
          source={props.imgUrl as ImageSourcePropType}
          className="h-32 w-32 rounded-full border-2"
        />
      ) : (
        <View className="h-32 w-32 rounded-full border-2" />
      )}
      <Text
        style={{
          fontFamily: 'Poppins_500Medium',
        }}>
        {props.nome}
      </Text>
    </View>
  );
}

export default MemberAvatar;
