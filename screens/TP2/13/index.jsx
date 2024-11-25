import React, { useState, createContext, useContext } from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

const PontuacaoContext = createContext();

const perguntas = [
    {
      id: 1, 
      pergunta: 'Qual filósofo pré-socrático introduziu o conceito de "ousia", que se referia à substância ou essência permanente das coisas?', 
      opcoes: ['Heráclito', 'Parmênides', 'Platão', 'Aristóteles'], 
      resposta: 'Parmênides'
    },
    {
      id: 2, 
      pergunta: 'Na alquimia medieval, o "elixir da vida" era considerado capaz de transmutar o corpo humano. Qual era o principal objetivo desta substância?', 
      opcoes: ['Imortalidade', 'Riqueza material', 'Poder político', 'Conhecimento divino'], 
      resposta: 'Imortalidade'
    },
    {
      id: 3, 
      pergunta: 'De acordo com a astrologia helenística, a posição dos planetas no momento do nascimento de uma pessoa influencia sua natureza. Qual era o princípio central desta astrologia?', 
      opcoes: ['A correspondência entre macrocosmo e microcosmo', 'O livre arbítrio', 'A previsibilidade das ações humanas', 'O destino coletivo'], 
      resposta: 'A correspondência entre macrocosmo e microcosmo'
    },
    {
      id: 4, 
      pergunta: 'Quem foi o filósofo grego que associou o número 10 à perfeição universal, influenciando o desenvolvimento da numerologia?', 
      opcoes: ['Pitágoras', 'Sócrates', 'Platão', 'Aristóteles'], 
      resposta: 'Pitágoras'
    },
    {
      id: 5, 
      pergunta: 'Em quais textos da alquimia egípcia podemos encontrar a base das primeiras ideias sobre a transmutação de metais e a busca pela pedra filosofal?', 
      opcoes: ['O Corpus Hermeticum', 'A Bíblia', 'O Talmude', 'As Meditações de Marco Aurélio'], 
      resposta: 'O Corpus Hermeticum'
    },
    {
      id: 6, 
      pergunta: 'Na filosofia estoica, qual era o conceito de "apatheia", que estava relacionado com a busca pela virtude?', 
      opcoes: ['Indiferença aos prazeres sensoriais', 'Busca pelo prazer de forma desmedida', 'Desprezo pela razão', 'Percepção aguçada do mundo exterior'], 
      resposta: 'Indiferença aos prazeres sensoriais'
    },
    {
      id: 7, 
      pergunta: 'O que significava o "Sol Invictus" no contexto das antigas religiões mistéricas romanas?', 
      opcoes: ['O deus da luz eterna', 'A divindade da guerra', 'O deus da sabedoria', 'A figura do governante divino'], 
      resposta: 'O deus da luz eterna'
    },
    {
      id: 8, 
      pergunta: 'Em quais práticas a astrologia antiga e a alquimia se interligavam diretamente, principalmente no que diz respeito ao uso dos metais planetários?', 
      opcoes: ['Nas fórmulas para criar elixires', 'No controle do clima', 'Na manipulação das emoções humanas', 'No estudo da geografia celestial'], 
      resposta: 'Nas fórmulas para criar elixires'
    },
    {
      id: 9, 
      pergunta: 'Na filosofia de Platão, como ele concebia o "mundo das ideias", em relação ao mundo sensível?', 
      opcoes: ['Como a verdadeira realidade e o mundo sensível como uma cópia imperfeita', 'Como uma ilusão temporária', 'Como um reflexo do cosmos divino', 'Como um mundo de aprendizagem sem fim'], 
      resposta: 'Como a verdadeira realidade e o mundo sensível como uma cópia imperfeita'
    },
    {
      id: 10, 
      pergunta: 'O que representa o conceito de "Lapis Philosophorum" (Pedra Filosofal) na alquimia medieval?', 
      opcoes: ['A busca pela perfeição espiritual e material', 'A manipulação dos astros', 'A criação de uma utopia política', 'O poder absoluto sobre a matéria'], 
      resposta: 'A busca pela perfeição espiritual e material'
    },
  ];  

function PaginaQuiz({ navigation }) {
  const [indicePergunta, setIndicePergunta] = useState(0);
  const [pontuacao, setPontuacao] = useState(0);
  const { adicionarPontuacao } = useContext(PontuacaoContext);

  const responder = (opcao) => {
    if (opcao === perguntas[indicePergunta].resposta) setPontuacao(pontuacao + 1);
    const proximaPergunta = indicePergunta + 1;
    if (proximaPergunta < perguntas.length) {
      setIndicePergunta(proximaPergunta);
    } else {
      adicionarPontuacao(pontuacao);
      navigation.navigate('Resultado', { pontuacao });
    }
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.pergunta}>{perguntas[indicePergunta].pergunta}</Text>
      {perguntas[indicePergunta].opcoes.map((opcao, index) => (
        <TouchableOpacity
          key={index}
          style={estilos.botaoOpcao}
          onPress={() => responder(opcao)}>
          <Text style={estilos.textoOpcao}>{opcao}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function PaginaResultado({ route, navigation }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.pontuacao}>Sua pontuação: {route.params.pontuacao}</Text>
      <Button title="Recomeçar Quiz" onPress={() => navigation.navigate('Quiz')} />
    </View>
  );
}

function TelaPontuacao() {
  const { pontuacoes } = useContext(PontuacaoContext);
  
  return (
    <View style={estilos.container}>
      <Text style={estilos.pontuacao}>Histórico de Pontuações:</Text>
      {pontuacoes.length > 0 ? (
        pontuacoes.map((p, index) => (
          <Text key={index} style={estilos.descricao}>Jogo {index + 1}: {p} pontos</Text>
        ))
      ) : (
        <Text style={estilos.descricao}>Nenhuma pontuação registrada ainda.</Text>
      )}
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function QuizStack() {
  return (
    <Stack.Navigator initialRouteName="Quiz">
      <Stack.Screen name="Quiz" component={PaginaQuiz} options={{ title: 'Quiz' }} />
      <Stack.Screen name="Resultado" component={PaginaResultado} options={{ title: 'Resultado Final' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [pontuacoes, setPontuacoes] = useState([]);

  const adicionarPontuacao = (pontuacao) => {
    setPontuacoes([...pontuacoes, pontuacao]);
  };

  return (
    <PontuacaoContext.Provider value={{ pontuacoes, adicionarPontuacao }}>
      <NavigationContainer independent={true}>
        <Tab.Navigator>
          <Tab.Screen name="Quiz" component={QuizStack} options={{ title: 'Quiz' }} />
          <Tab.Screen name="Pontuação" component={TelaPontuacao} options={{ title: 'Pontuação' }} />
        </Tab.Navigator>
      </NavigationContainer>
    </PontuacaoContext.Provider>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  pergunta: {
    fontSize: 20,
    color: '#45b1f5',
    marginBottom: 20,
    textAlign: 'center',
  },
  botaoOpcao: {
    backgroundColor: '#45b1f5',
    padding: 15,
    borderRadius: 5,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
  },
  textoOpcao: {
    color: '#fff',
    fontSize: 18,
  },
  pontuacao: {
    fontSize: 24,
    color: '#45b1f5',
    marginBottom: 20,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
  },
});
