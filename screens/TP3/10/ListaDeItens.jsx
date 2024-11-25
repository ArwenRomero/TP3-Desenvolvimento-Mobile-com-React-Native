import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function ListaDeItens({ itens, ordem }) {
  const itensOrdenados = [...itens].sort((a, b) => {
    switch (ordem) {
      case 'nome-asc':
        return a.nome.localeCompare(b.nome);
      case 'nome-desc':
        return b.nome.localeCompare(a.nome);
      case 'preco-asc':
        return a.preco - b.preco;
      case 'preco-desc':
        return b.preco - a.preco;
      default:
        return 0;
    }
  });

  return (
    <FlatList
      data={itensOrdenados}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={estilos.item}>
          <Text style={estilos.textoNome}>{item.nome}</Text>
          <Text style={estilos.textoPreco}>R$ {item.preco.toFixed(2)}</Text>
        </View>
      )}
    />
  );
}

const estilos = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#d9e3f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textoNome: {
    fontSize: 18,
  },
  textoPreco: {
    fontSize: 16,
    color: '#4f4f4f',
  },
});
