import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Questao = ({ pergunta, opcoes, proximaTela }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.pergunta}>{pergunta}</Text>
      {opcoes.map((opcao, index) => (
        <TouchableOpacity key={index} style={styles.botao} onPress={() => {}}>
          <Text style={styles.textoBotao}>{opcao}</Text>
        </TouchableOpacity>
      ))}
      {proximaTela && (
        <TouchableOpacity
          style={[styles.botao, styles.botaoProximo]}
          onPress={() => navigation.navigate(proximaTela)}
        >
          <Text style={styles.textoBotaoProximo}>Próxima</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  pergunta: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  botao: {
    backgroundColor: '#e0e0e0',
    padding: 12,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  textoBotao: {
    fontSize: 16,
    color: '#000',
  },
  botaoProximo: {
    backgroundColor: '#0288d1',
  },
  textoBotaoProximo: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Questao;
