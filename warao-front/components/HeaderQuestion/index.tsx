
import { View, Text } from 'react-native';
import styles from './styles';

const HeaderQuestion = ({ title }: { title: string }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default HeaderQuestion;