import { FlatList, Text, View, StyleSheet } from 'react-native';

export default function ProdutoLista({ produtos }) {
  return (
    <FlatList
      data={produtos}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.text}>{item.nome}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: '#0288d1',
    backgroundColor: '#fff',
    borderRadius: 8,
    marginVertical: 5,
  },
  text: {
    fontSize: 18,
    color: '#0288d1',
    fontWeight: 'bold',
  },
});
