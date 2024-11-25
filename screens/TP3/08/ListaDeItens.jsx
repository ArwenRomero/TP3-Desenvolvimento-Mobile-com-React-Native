import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function ListaDeItens({ itens }) {
  return (
    <FlatList
      data={itens}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={estilos.cartao}>
          <Text style={estilos.titulo}>{item.nome}</Text>
          <Text style={estilos.detalhes}>{item.descricao}</Text>
        </View>
      )}
    />
  );
}

const estilos = StyleSheet.create({
  cartao: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#aaa',
    backgroundColor: '#fff',
  },
  titulo: {
    fontSize: 20,
    fontWeight: '600',
  },
  detalhes: {
    fontSize: 16,
    color: '#444',
  },
});
