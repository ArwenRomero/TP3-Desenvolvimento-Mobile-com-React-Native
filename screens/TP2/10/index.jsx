import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const produtos = [
  { id: '1', nome: 'Produto A', descricao: 'Descrição', preco: 'R$ 99,99', imagem: 'https://picsum.photos/300' },
  { id: '2', nome: 'Produto B', descricao: 'Descrição', preco: 'R$ 89,99', imagem: 'https://picsum.photos/350' },
  { id: '3', nome: 'Produto C', descricao: 'Descrição', preco: 'R$ 79,99', imagem: 'https://picsum.photos/400' },
];

function ListaProdutos({ navigation }) {
  const [carrinho, setCarrinho] = useState([]);

  const adicionarAoCarrinho = (produto) => {
    setCarrinho([...carrinho, produto]);
  };

  const renderizarProduto = ({ item }) => (
    <View style={styles.produtoContainer}>
      <Image source={{ uri: item.imagem }} style={styles.imagemProduto} />
      <View style={styles.infoProduto}>
        <Text style={styles.nomeProduto}>{item.nome}</Text>
        <Text style={styles.descricaoProduto}>{item.descricao}</Text>
        <Text style={styles.precoProduto}>{item.preco}</Text>
        <TouchableOpacity onPress={() => adicionarAoCarrinho(item)} style={styles.botaoAdicionar}>
          <Text style={styles.textoBotao}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Produtos</Text>
      <FlatList data={produtos} renderItem={renderizarProduto} keyExtractor={(item) => item.id} />
      <TouchableOpacity onPress={() => navigation.navigate('Carrinho', { carrinho })} style={styles.botaoCarrinho}>
        <Text style={styles.textoBotao}>Ir para o Carrinho</Text>
      </TouchableOpacity>
    </View>
  );
}

function Carrinho({ route }) {
  const { carrinho } = route.params;

  const calcularTotal = () => {
    return carrinho.reduce((total, item) => total + parseFloat(item.preco.replace('R$', '').replace(',', '.')), 0).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Carrinho</Text>
      <FlatList
        data={carrinho}
        renderItem={({ item }) => (
          <View style={styles.carrinhoItem}>
            <Image source={{ uri: item.imagem }} style={styles.imagemCarrinho} />
            <Text style={styles.nomeCarrinho}>{item.nome}</Text>
            <Text style={styles.precoCarrinho}>{item.preco}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.total}>Total: R$ {calcularTotal()}</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="ListaProdutos" component={ListaProdutos} options={{ title: 'Produtos' }} />
        <Stack.Screen name="Carrinho" component={Carrinho} options={{ title: 'Carrinho' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  titulo: { fontSize: 20, fontWeight: 'bold', color: '#45b1f5', marginBottom: 10 },
  produtoContainer: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#ddd' },
  imagemProduto: { width: 57, height: 72, marginRight: 10 },
  infoProduto: { flex: 1, justifyContent: 'center' },
  nomeProduto: { fontSize: 16, fontWeight: 'bold', color: '#000' },
  descricaoProduto: { fontSize: 14, color: '#666' },
  precoProduto: { fontSize: 16, fontWeight: 'bold', color: '#45b1f5' },
  botaoAdicionar: { marginTop: 5, padding: 5, backgroundColor: '#45b1f5', borderRadius: 5 },
  textoBotao: { color: '#fff', textAlign: 'center' },
  carrinhoItem: { flexDirection: 'row', alignItems: 'center', marginVertical: 5 },
  imagemCarrinho: { width: 57, height: 45, marginRight: 10 },
  nomeCarrinho: { fontSize: 16, flex: 1 },
  precoCarrinho: { fontSize: 16, fontWeight: 'bold', color: '#45b1f5' },
  total: { fontSize: 18, fontWeight: 'bold', color: '#45b1f5', marginTop: 10, textAlign: 'right' },
  botaoCarrinho: { marginTop: 10, padding: 10, backgroundColor: '#45b1f5', borderRadius: 5 },
});
