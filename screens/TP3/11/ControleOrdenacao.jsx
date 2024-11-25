import { View, Picker, StyleSheet } from 'react-native';

export default function ControleOrdenacao({ definirOrdem }) {
  return (
    <View style={estilos.conteinerSelecao}>
      <Picker
        selectedValue={'nome-asc'}
        onValueChange={(valor) => definirOrdem(valor)}
        style={estilos.seletor}
      >
        <Picker.Item label="Nome (A-Z)" value="nome-asc" />
        <Picker.Item label="Nome (Z-A)" value="nome-desc" />
        <Picker.Item label="Preço (Menor)" value="preco-asc" />
        <Picker.Item label="Preço (Maior)" value="preco-desc" />
      </Picker>
    </View>
  );
}

const estilos = StyleSheet.create({
  conteinerSelecao: {
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#0288d1',
    borderRadius: 8,
    backgroundColor: '#f0f8ff',
  },
});
