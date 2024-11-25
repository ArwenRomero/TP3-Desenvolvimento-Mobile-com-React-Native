import { FlatList, Text, View, StyleSheet, ActivityIndicator } from 'react-native';

export default function ListagemItens({ itens, ordem, emCarregamento }) {
  if (emCarregamento) {
    return (
      <View style={estilos.carregando}>
        <ActivityIndicator size="large" color="#0288d1" />
        <Text style={estilos.textoCarregando}>Carregando...</Text>
      </View>
    );
  }

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
  carregando: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoCarregando: {
    marginTop: 10,
    color: '#0288d1',
    fontSize: 16,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#0288d1',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textoNome: {
    fontSize: 18,
  },
  textoPreco: {
    fontSize: 16,
    color: '#4f4f4f',
  },
});
