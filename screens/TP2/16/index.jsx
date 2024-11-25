import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet, FlatList, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const postagensExemplo = [
    { id: '1', usuario: 'Carlos Silva', destino: 'Paris, França', dataInicio: '10/01/2023', dataFim: '17/01/2023', nota: 5, curtidas: 12, comentarios: [] },
    { id: '2', usuario: 'Ana Oliveira', destino: 'Tóquio, Japão', dataInicio: '15/02/2023', dataFim: '25/02/2023', nota: 4, curtidas: 8, comentarios: [] },
    { id: '3', usuario: 'Eu', destino: 'Nova York, EUA', dataInicio: '05/03/2023', dataFim: '12/03/2023', nota: 3, curtidas: 5, comentarios: [] },
    { id: '4', usuario: 'Luiza Mendes', destino: 'Londres, Reino Unido', dataInicio: '10/04/2023', dataFim: '20/04/2023', nota: 5, curtidas: 18, comentarios: [] },
    { id: '5', usuario: 'Rafael Costa', destino: 'Sydney, Austrália', dataInicio: '10/05/2023', dataFim: '20/05/2023', nota: 4, curtidas: 10, comentarios: [] },
  ];

const TelaFeed = ({ navigation }) => {
  const [postagens, setPostagens] = useState(postagensExemplo);

  const incrementarCurtidas = (id) => {
    setPostagens((postagens) =>
      postagens.map((postagem) =>
        postagem.id === id ? { ...postagem, curtidas: postagem.curtidas + 1 } : postagem
      )
    );
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Feed de Viagens</Text>
      <FlatList
        data={postagens.filter(post => post.usuario !== 'Eu')}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('Detalhes', { postagem: item })}>
            <View style={estilos.postagem}>
              <Text style={estilos.nomeUsuario}>{item.usuario}</Text>
              <Text style={estilos.destino}>{item.destino}</Text>
              <Text>Nota: {item.nota}/5</Text>
              <Text>{item.curtidas} curtidas</Text>
              <TouchableOpacity onPress={() => incrementarCurtidas(item.id)} style={estilos.botaoCurtir}>
                <FontAwesome name="thumbs-up" size={20} color="#45b1f5" />
                <Text style={estilos.textoCurtir}>Curtir</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const TelaMinhasViagens = () => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Minhas Viagens</Text>
      <FlatList
        data={postagensExemplo.filter(post => post.usuario === 'Eu')}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={estilos.postagem}>
            <Text style={estilos.destino}>{item.destino}</Text>
            <Text>Nota: {item.nota}/5</Text>
          </View>
        )}
      />
    </View>
  );
};

const TelaDetalhes = ({ route }) => {
  const { postagem } = route.params;
  const [comentario, setComentario] = useState('');
  const [postagens, setPostagens] = useState(postagensExemplo);

  const adicionarComentario = () => {
    if (comentario.trim() === '') {
      Alert.alert('Comentário vazio', 'Por favor, escreva algo.');
      return;
    }

    const novaPostagem = postagens.map(post =>
      post.id === postagem.id
        ? { ...post, comentarios: [...post.comentarios, comentario] }
        : post
    );
    setPostagens(novaPostagem);
    setComentario('');
    Alert.alert('Comentário Adicionado', 'Seu comentário foi adicionado.');
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Detalhes da Viagem</Text>
      <Text>Usuário: {postagem.usuario}</Text>
      <Text>Destino: {postagem.destino}</Text>
      <Text>Data de Início: {postagem.dataInicio}</Text>
      <Text>Data de Fim: {postagem.dataFim}</Text>
      <Text>Nota: {postagem.nota}/5</Text>
      <Text>Curtidas: {postagem.curtidas}</Text>
      
      <TextInput
        style={estilos.inputComentario}
        placeholder="Adicionar um comentário..."
        value={comentario}
        onChangeText={setComentario}
      />
      <Button title="Enviar Comentário" color="#45b1f5" onPress={adicionarComentario} />
      
      <Text style={estilos.tituloComentario}>Comentários:</Text>
      <FlatList
        data={postagem.comentarios}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={estilos.comentario}>{item}</Text>}
      />
    </View>
  );
};

const TelaPerfil = () => (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Meu Perfil</Text>
      <View style={estilos.perfilInfo}>
        <Text style={estilos.perfilNome}>Arwen Romero</Text>
        <Text>Email: arwen@gmail.com</Text>
        <Text>Telefone: (11) 98765-4321</Text>
        <Text>Localização: São Paulo, SP</Text>
      </View>
    </View>
  );

const TelaAmigos = () => (
  <View style={estilos.container}>
    <Text style={estilos.titulo}>Amigos</Text>
    <Text>Carlos Silva</Text>
    <Text>Ana Oliveira</Text>
    <Text>Lucas Santos</Text>
  </View>
);

const TelaConfiguracoes = () => (
  <View style={estilos.container}>
    <Text style={estilos.titulo}>Configurações</Text>
    <Text>Ajustes de conta e privacidade</Text>
  </View>
);

const NavegacaoPrincipal = () => (
  <Stack.Navigator>
    <Stack.Screen name="FeedPrincipal" component={TelaFeed} options={{ title: 'Feed de Viagens' }} />
    <Stack.Screen name="Detalhes" component={TelaDetalhes} options={{ title: 'Detalhes da Viagem' }} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator initialRouteName="FeedPrincipal">
        <Drawer.Screen name="Perfil" component={TelaPerfil} />
        <Drawer.Screen name="FeedPrincipal" component={NavegacaoPrincipal} options={{ title: 'Feed' }} />
        <Drawer.Screen name="Minhas Viagens" component={TelaMinhasViagens} />
        <Drawer.Screen name="Amigos" component={TelaAmigos} />
        <Drawer.Screen name="Configurações" component={TelaConfiguracoes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  titulo: {
    fontSize: 24,
    color: '#45b1f5',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  postagem: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  nomeUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  destino: {
    fontSize: 16,
    color: '#45b1f5',
  },
  botaoCurtir: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  textoCurtir: {
    marginLeft: 5,
    color: '#45b1f5',
  },
  inputComentario: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingLeft: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  tituloComentario: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  comentario: {
    fontSize: 16,
    color: '#555',
    marginTop: 5,
  },
});

export default App;
