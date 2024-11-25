import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function BarraDeBusca({ aoFiltrar }) {
  const [valor, setValor] = useState('');

  return (
    <View style={estilos.barraContainer}>
      <TextInput
        style={estilos.campoTexto}
        placeholder="Buscar por nome ou detalhes"
        value={valor}
        onChangeText={setValor}
      />
      <Button title="Buscar" onPress={() => aoFiltrar(valor)} />
    </View>
  );
}

const estilos = StyleSheet.create({
  barraContainer: {
    marginBottom: 12,
  },
  campoTexto: {
    borderWidth: 1,
    borderColor: '#bbb',
    padding: 10,
    marginBottom: 6,
  },
});
