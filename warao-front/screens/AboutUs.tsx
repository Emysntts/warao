import { useFonts, Poppins_600SemiBold, Poppins_500Medium } from '@expo-google-fonts/poppins';
import MemberAvatar from 'components/MemberAvatar';
import { Image, View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';

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
      image_url: require('../assets/images/Icaro.png'),
    },
    {
      name: 'Daniel Victor',
      role: 'Coordenador',
      image_url: require('../assets/images/Daniel.png'),
    },
    {
      name: 'Jonatas Miguel',
      role: 'Front-End Developer',
      image_url: require('../assets/images/Jonatas.png'),
    },
    {
      name: 'Emyle dos Santos',
      role: 'System Architect',
      image_url: require('../assets/images/Emyle.jpeg'),
    },
    {
      name: 'Carlos Freitas',
      role: 'Fullstack Dev',
      image_url: require('../assets/images/Carlos.jpg'),
    },
    {
      name: 'Victor Reis',
      role: 'Data Analyst',
      image_url: require('../assets/images/Vitor.jpeg'),
    },
    {
      name: 'Larissa Cristiana',
      role: 'Data Analyst',
      image_url: require('../assets/images/Larissa.png'),
    },
    {
      name: 'Lucas Rabay',
      role: 'Data Analyst',
      image_url: require('../assets/images/Lucas.jpeg'),
    },
  ];

  return (
    <ScrollView>
      <View className="h-full w-full flex-col items-center justify-start gap-10 bg-warao-sandcolor  pb-2 ">
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

        <FlatList
          data={teamMembers}
          numColumns={2}
          scrollEnabled={false}
          columnWrapperStyle={{
            width: '100%',
            justifyContent: 'space-around',
          }}
          contentContainerStyle={{
            width: '100%',
          }}
          renderItem={({ item }) => (
            <MemberAvatar funcao={item.role} nome={item.name} imgUrl={item.image_url} />
          )}
        />

        {/* 
        <View className="grid grid-cols-2 grid-rows-4 gap-4">
          {teamMembers.map((member, i) => (
            <MemberAvatar
              key={i}
              funcao={member.role}
              nome={member.name}
              imgUrl={member.image_url}
            />
          ))} 
        </View> */}
      </View>
    </ScrollView>
  );
}

export default AboutUsPage;
