import { View, Text, StyleSheet } from "react-native";

const ItemProposicao = ({ titulo, descricao }) => (
  <View style={estilos.cartao}>
    <Text style={estilos.titulo}>{titulo}</Text>
    <Text style={estilos.descricao}>{descricao}</Text>
  </View>
);

const estilos = StyleSheet.create({
  cartao: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#cfd8dc",
    backgroundColor: "#ffffff",
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0288d1",
  },
  descricao: {
    fontSize: 14,
    color: "#455a64",
  },
});

export default ItemProposicao;
