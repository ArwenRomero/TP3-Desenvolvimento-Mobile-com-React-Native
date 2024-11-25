import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function ListaDeItens({ itens, ordem }) {
  const itensOrdenados = [...itens].sort((a, b) => {
    if (ordem === 'asc') {
      return a.nome.localeCompare(b.nome);
    } else {
      return b.nome.localeCompare(a.nome);
    }
  });

  return (
    <FlatList
      data={itensOrdenados}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={estilos.item}>
          <Text style={estilos.texto}>{item.nome}</Text>
        </View>
      )}
    />
  );
}

const estilos = StyleSheet.create({
  item: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#bbb',
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});
