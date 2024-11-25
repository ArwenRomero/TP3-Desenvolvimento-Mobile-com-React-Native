import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const Stack = createStackNavigator();

const postagens = [
  { id: '1', titulo: 'Título 1', resumo: 'Resumo 1', curtidas: 20, compartilhamentos: 5 },
  { id: '2', titulo: 'Título 2', resumo: 'Resumo 2', curtidas: 15, compartilhamentos: 3 },
  { id: '3', titulo: 'Título 3', resumo: 'Resumo 3', curtidas: 30, compartilhamentos: 10 }
];

function ListaDePostagens({ navigation }) {
  return (
    <View style={estilos.container}>
      <FlatList
        data={postagens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={estilos.postagem} onPress={() => navigation.navigate('DetalhesDaPostagem', { postagem: item })}>
            <Text style={estilos.titulo}>{item.titulo}</Text>
            <Text style={estilos.resumo}>{item.resumo}</Text>
            <View style={estilos.rodape}>
              <Text style={estilos.rodapeTexto}>Curtidas {item.curtidas}</Text>
              <Text style={estilos.rodapeTexto}>Compart. {item.compartilhamentos}</Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

function DetalhesDaPostagem({ route }) {
  const { postagem } = route.params;

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{postagem.titulo}</Text>
      <Text style={estilos.meta}>Curtidas {postagem.curtidas} Compart. {postagem.compartilhamentos}</Text>
      <ScrollView style={estilos.textoContainer}>
        <Text style={estilos.texto}>Texto completo do tópico para {postagem.titulo}</Text>
      </ScrollView>
      <Text style={estilos.autor}>Autor</Text>
      <Text style={estilos.data}>Postado em: 01/01/2023 10:00</Text>
    </View>
  );
}

export default function Exercicio09() {
  return (
    <Stack.Navigator initialRouteName="ListaDePostagens">
      <Stack.Screen
        name="ListaDePostagens"
        component={ListaDePostagens}
        options={{ title: 'Lista de Postagens', headerStyle: { backgroundColor: '#45b1f5' }, headerTintColor: '#fff' }}
      />
      <Stack.Screen
        name="DetalhesDaPostagem"
        component={DetalhesDaPostagem}
        options={{ title: 'Detalhes da Postagem', headerStyle: { backgroundColor: '#45b1f5' }, headerTintColor: '#fff' }}
      />
    </Stack.Navigator>
  );
}

const estilos = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 10 },
  postagem: { backgroundColor: '#45b1f5', padding: 15, marginVertical: 8, borderRadius: 8 },
  titulo: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  resumo: { fontSize: 14, color: '#fff', marginVertical: 5 },
  rodape: { flexDirection: 'row', justifyContent: 'space-between' },
  rodapeTexto: { color: '#fff' },
  meta: { fontSize: 14, color: '#45b1f5', marginVertical: 5 },
  textoContainer: { marginVertical: 10 },
  texto: { fontSize: 16, color: '#333' },
  autor: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  data: { fontSize: 12, color: '#666' }
});
