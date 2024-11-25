import { View, StyleSheet } from 'react-native';
import Lista from './Lista.jsx';

export default function App() {
  const atividades = [
    { id: 1, titulo: 'Ir ao mercado' },
    { id: 2, titulo: 'Praticar yoga' },
    { id: 3, titulo: 'Estudar React Native' },
    { id: 4, titulo: 'Assistir um filme' },
    { id: 5, titulo: 'Limpar o quarto' },
    { id: 6, titulo: 'Planejar a semana' },
    { id: 7, titulo: 'Revisar código' },
    { id: 8, titulo: 'Ler um artigo' },
    { id: 9, titulo: 'Organizar documentos' },
    { id: 10, titulo: 'Fazer caminhada' },
  ];

  return (
    <View style={styles.areaPrincipal}>
      <Lista itens={atividades} />
    </View>
  );
}

const styles = StyleSheet.create({
  areaPrincipal: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: '#e3f2fd', // Azul claro
    padding: 15,
  },
});
