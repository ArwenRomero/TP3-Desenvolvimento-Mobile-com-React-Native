import { View, Picker, StyleSheet } from 'react-native';

export default function ControleDeOrdem({ definirOrdem }) {
  return (
    <View style={estilos.seletorContainer}>
      <Picker
        selectedValue={'asc'}
        onValueChange={(valorSelecionado) => definirOrdem(valorSelecionado)}
        mode="dropdown"
      >
        <Picker.Item label="Ordem A-Z" value="asc" />
        <Picker.Item label="Ordem Z-A" value="desc" />
      </Picker>
    </View>
  );
}

const estilos = StyleSheet.create({
  seletorContainer: {
    margin: 12,
  },
});
