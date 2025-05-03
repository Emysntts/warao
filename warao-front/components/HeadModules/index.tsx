import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const HeadModules = ({titulo}: {titulo: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Modulo - {titulo}</Text>
    </View>
  );
};

export default HeadModules;