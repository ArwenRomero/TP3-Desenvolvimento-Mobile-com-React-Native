import { View, Picker, StyleSheet } from 'react-native';

export default function SelecaoDeOrdem({ definirOrdem }) {
  return (
    <View style={estilos.containerSeletor}>
      <Picker
        selectedValue={'nome-asc'}
        onValueChange={(valorSelecionado) => definirOrdem(valorSelecionado)}
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
  containerSeletor: {
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#0288d1',
    borderRadius: 8,
    backgroundColor: '#e3f2fd',
  },
});
