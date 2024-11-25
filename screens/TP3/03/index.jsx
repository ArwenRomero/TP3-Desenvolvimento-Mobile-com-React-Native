import { View, StyleSheet } from 'react-native';
import Lista from './Lista.jsx';

export default function App() {
  const atividades = [
    { id: '1', titulo: 'Ir ao mercado' },
    { id: '2', titulo: 'Praticar exercícios' },
    { id: '3', titulo: 'Estudar JavaScript' },
    { id: '4', titulo: 'Assistir um filme' },
    { id: '5', titulo: 'Limpar a sala' },
  ];

  return (
    <View style={styles.areaPrincipal}>
      <Lista dados={atividades} />
    </View>
  );
}

const styles = StyleSheet.create({
  areaPrincipal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#e3f2fd', // Azul claro
    padding: 20,
  },
});
