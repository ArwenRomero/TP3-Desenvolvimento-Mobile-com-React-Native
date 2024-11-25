import { FlatList, Text, View, StyleSheet } from 'react-native';

const Lista = ({ dados }) => {
  const renderizarItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.textoItem}>{item.titulo}</Text>
    </View>
  );

  return (
    <FlatList
      data={dados}
      keyExtractor={(item) => item.id}
      renderItem={renderizarItem}
      contentContainerStyle={styles.containerLista}
    />
  );
};

const styles = StyleSheet.create({
  containerLista: {
    paddingVertical: 12,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 18,
    marginVertical: 10,
    borderRadius: 12,
    elevation: 4,
    shadowColor: '#555',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
  },
  textoItem: {
    fontSize: 18,
    color: '#1a1a1a',
  },
});

export default Lista;
