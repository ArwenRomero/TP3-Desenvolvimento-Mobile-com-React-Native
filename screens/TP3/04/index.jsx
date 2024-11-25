import { View, StyleSheet } from 'react-native';
import Lista from './Lista.jsx';

export default function App() {
  const atividadesPorCategoria = [
    {
      title: 'Manhã',
      data: ['Caminhar no parque', 'Preparar café da manhã', 'Organizar agenda'],
    },
    {
      title: 'Tarde',
      data: ['Almoçar com amigos', 'Estudar React Native', 'Fazer compras'],
    },
    {
      title: 'Noite',
      data: ['Jantar em família', 'Ler um livro', 'Relaxar assistindo TV'],
    },
  ];

  return (
    <View style={styles.container}>
      <Lista categorias={atividadesPorCategoria} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#e3f2fd',
    padding: 15,
  },
});
