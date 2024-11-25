import { ScrollView, Text, View, StyleSheet } from 'react-native';

const Lista = ({ itens }) => {
  return (
    <ScrollView contentContainerStyle={styles.areaRolagem}>
      {itens.map((item) => (
        <View key={item.id} style={styles.cardItem}>
          <Text style={styles.textoItem}>{item.titulo}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  areaRolagem: {
    paddingVertical: 12,
  },
  cardItem: {
    backgroundColor: '#e3f2fd', // Azul claro
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#7a7a7a',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  textoItem: {
    fontSize: 18,
    color: '#1c1c1c',
  },
});

export default Lista;
