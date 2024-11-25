import { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function Filtro({ onFiltrar }) {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.filtroContainer}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome do produto"
        placeholderTextColor="#0288d1"
        value={texto}
        onChangeText={setTexto}
      />
      <Button title="Filtrar" onPress={() => onFiltrar(texto)} color="#0288d1" />
    </View>
  );
}

const styles = StyleSheet.create({
  filtroContainer: {
    marginBottom: 10,
    backgroundColor: '#f1f1f1',
    borderRadius: 8,
    padding: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#0288d1',
    borderRadius: 8,
    padding: 8,
    marginBottom: 10,
    color: '#333',
  },
});
