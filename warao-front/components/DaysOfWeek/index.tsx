import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const getDaysOfWeek = () => {
  const days = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const today = new Date();
  const currentDay = today.getDay();
  const currentDate = today.getDate();

  return days.map((day, index) => {
    // Calcular a data correspondente ao dia da semana
    const date = new Date(today.getFullYear(), today.getMonth(), currentDate - currentDay + index);

    // Formatar a data no formato YYYY-MM-DD
    const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

    // Lista de cores associadas a datas específicas
    const activityColors: { [key: string]: string } = {
      '2025-4-29': '#595880',
      '2025-4-30': '#F16F33',
    };

    // Verifica se a data está na lista e obtém a cor correspondente
    const activityColor = activityColors[formattedDate] || null;

    return {
      name: day,
      date: date.getDate(),
      isToday: index === currentDay, // Verifica se é o dia atual
      activityColor, // Cor da atividade, se houver
    };
  });
};

const DaysOfWeek = () => {
  const [daysOfWeek, setDaysOfWeek] = useState(getDaysOfWeek());

  useEffect(() => {
    const interval = setInterval(() => {
      setDaysOfWeek(getDaysOfWeek());
    }, 3600000); // Atualiza a cada 1 hora
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.daytexttitle}>Disciplina</Text>
      
      <View style={styles.listcontainer}>
        {daysOfWeek.map((day, index) => (
          <View
            key={index}
            style={[
              styles.dayContainer,
              styles.notToday, // Aplica o estilo padrão para todos os dias
              day.activityColor ? { backgroundColor: day.activityColor } : null, // Aplica a cor de fundo da atividade, se houver
              day.isToday ? { borderColor: 'green', borderWidth: 2 } : null, // Adiciona a borda verde para o dia atual
            ]}
          >
            <Text
              style={[
                styles.dayName,
                day.activityColor ? { color: '#FFFFFF' } : null, // Texto branco se houver activityColor
              ]}
            >
              {day.name}
            </Text>

            <Text
              style={[
                styles.dayDate,
                day.activityColor ? { color: '#FFFFFF' } : null, // Texto branco se houver activityColor
              ]}
            >
              {day.date}
            </Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default DaysOfWeek;