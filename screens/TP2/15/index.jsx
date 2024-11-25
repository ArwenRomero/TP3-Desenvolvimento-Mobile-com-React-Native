import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const filmes = ["Inception", "The Matrix", "Avatar", "The Godfather", "Interstellar"];
const usuarios = [
  { nome: "Marcos", preferencias: { "Inception": true, "The Matrix": false, "Avatar": true, "The Godfather": false, "Interstellar": true } },
  { nome: "Jonathan", preferencias: { "Inception": true, "The Matrix": true, "Avatar": false, "The Godfather": true, "Interstellar": false } },
  { nome: "Thalita", preferencias: { "Inception": false, "The Matrix": false, "Avatar": true, "The Godfather": true, "Interstellar": true } },
];

const calcularAfinidade = (preferencias, outroUsuario) => {
  let afinidade = 0;
  Object.keys(preferencias).forEach(filme => {
    if (preferencias[filme] === outroUsuario.preferencias[filme]) afinidade += 1;
  });
  return afinidade;
};

const TelaInicial = ({ navigation }) => {
  const [preferencias, setPreferencias] = useState({});
  const [indiceAtual, setIndiceAtual] = useState(0);

  const marcarPreferencia = (gosta) => {
    setPreferencias(prev => ({ ...prev, [filmes[indiceAtual]]: gosta }));
    setIndiceAtual(prev => prev + 1);
  };

  return (
    <View style={estilos.container}>
      {indiceAtual < filmes.length ? (
        <>
          <Text style={estilos.titulo}>Você gosta de:</Text>
          <Text style={estilos.item}>{filmes[indiceAtual]}</Text>
          <View style={estilos.botoes}>
            <TouchableOpacity onPress={() => marcarPreferencia(true)} style={estilos.botaoSim}>
              <Text style={estilos.textoBotao}>Sim</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => marcarPreferencia(false)} style={estilos.botaoNao}>
              <Text style={estilos.textoBotao}>Não</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <Text style={estilos.titulo}>Preferências finalizadas!</Text>
      )}
      <Button
        title="Ver Matches de Afinidade"
        color="#45b1f5"
        onPress={() => navigation.navigate("Matches", { preferencias })}
      />
    </View>
  );
};

const TelaMatches = ({ route }) => {
  const { preferencias } = route.params;
  const usuariosComAfinidade = usuarios.map(usuario => ({
    ...usuario,
    afinidade: calcularAfinidade(preferencias, usuario),
  })).sort((a, b) => b.afinidade - a.afinidade);

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Matches de Afinidade</Text>
      <FlatList
        data={usuariosComAfinidade}
        keyExtractor={(item) => item.nome}
        renderItem={({ item }) => (
          <View style={estilos.matchItem}>
            <Text style={estilos.nome}>{item.nome}</Text>
            <Text style={estilos.afinidade}>Afinidade: {item.afinidade}</Text>
          </View>
        )}
      />
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Inicial" component={TelaInicial} options={{ title: 'Preferências' }} />
        <Stack.Screen name="Matches" component={TelaMatches} options={{ title: 'Matches de Afinidade' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#45b1f5',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    fontSize: 22,
    color: '#333',
    marginBottom: 20,
  },
  botoes: {
    flexDirection: 'row',
  },
  botaoSim: {
    backgroundColor: '#45b1f5',
    padding: 15,
    marginRight: 10,
    borderRadius: 5,
  },
  botaoNao: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 5,
  },
  textoBotao: {
    color: 'white',
    fontSize: 18,
  },
  matchItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    width: '100%',
  },
  nome: {
    fontSize: 20,
    color: '#333',
  },
  afinidade: {
    fontSize: 18,
    color: '#45b1f5',
  },
});

export default App;
