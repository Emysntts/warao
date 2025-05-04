import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import MemberAvatar from 'components/MemberAvatar';
import { Image, View, ScrollView, Text } from 'react-native';

const Logo = require('../assets/images/Logo.png');

type Member = {
  name: string;
  role: string;
  image_url?: string;
};

function AboutUsPage() {
  const [fonts] = useFonts({ Poppins_600SemiBold, Poppins_500Medium });

  if (!fonts) return null;

  const teamMembers: Member[] = [
    {
      name: 'Ícaro Mori',
      role: 'Coordenador',
    },
    {
      name: 'Daniel Victor',
      role: 'Coordenador',
    },
    {
      name: 'Carlos Freitas',
      role: 'Fullstack',
      image_url: require('../assets/images/Carlos.jpg'),
    },
    {
      name: 'Emyle dos Santos',
      role: 'Project Manager',
    },
    {
      name: 'Jonatas Miguel',
      role: 'Front-End',
    },
    {
      name: 'Victor Reis',
      role: 'Back-end',
    },
    {
      name: 'Larissa Cristiana',
      role: 'Data Analysis',
    },
    {
      name: 'Lucas Rabay',
      role: 'Data Analysis',
    },
  ];

  return (
    <ScrollView>
      <View className="h-full w-full flex-col items-center justify-start gap-10 pb-2 ">
        <View className=" w-full items-center justify-center rounded-b-[3rem] bg-warao-brown p-14">
          <Image source={Logo} resizeMode="contain" className="h-52 w-52" />
        </View>

        <Text
          className="text-2xl text-warao-brown"
          style={{
            fontFamily: 'Poppins_600SemiBold',
          }}>
          Bem vindo ao Warao
        </Text>
        <Text
          className="w-[95%] text-center text-xl text-warao-brown"
          style={{
            fontFamily: 'Poppins_500Medium',
          }}>
          Somos o Warao, um aplicativo de idiomas criado para ajudar o povo Warao na compreensão e
          no aprendizado da língua portuguesa.
        </Text>
        <Text
          className="text-2xl text-warao-brown"
          style={{
            fontFamily: 'Poppins_600SemiBold',
          }}>
          Objetivos
        </Text>
        <Text
          className="w-[95%] text-center text-xl text-warao-brown"
          style={{
            fontFamily: 'Poppins_500Medium',
          }}>
          O Warao tem como objetivo facilitar a inclusão do povo Warao no Brasil, por meio do ensino
          da língua portuguesa de forma acessível e respeitosa à sua cultura. O aplicativo busca
          fortalecer a comunicação, ampliar o acesso a serviços e oportunidades, e valorizar a
          identidade Warao, promovendo autonomia sem abrir mão de suas raízes.
        </Text>
        <Text
          className="text-2xl text-warao-brown"
          style={{
            fontFamily: 'Poppins_600SemiBold',
          }}>
          Equipe responsável
        </Text>

        <View className="flex w-full flex-row flex-wrap justify-center gap-4">
          {teamMembers.map((member, i) => (
            <MemberAvatar
              key={i}
              funcao={member.role}
              nome={member.name}
              imgUrl={member.image_url}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

export default AboutUsPage;
