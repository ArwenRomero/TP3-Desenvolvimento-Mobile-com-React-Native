import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View, StyleSheet } from 'react-native';
import Questao from './components/Questao.jsx';
import BarraProgresso from './components/BarraProgresso.jsx';

const Stack = createStackNavigator();

const questoes = [
  { pergunta: 'O que é a verdade?', opcoes: ['Uma interpretação', 'Algo absoluto', 'Uma construção social', 'Um ideal inalcançável'] },
  { pergunta: 'Qual filósofo afirmou "Penso, logo existo"?', opcoes: ['Kant', 'Descartes', 'Platão', 'Nietzsche'] },
  { pergunta: 'O que significa o conceito de "eudaimonia" em Aristóteles?', opcoes: ['Felicidade', 'Virtude', 'Liberdade', 'Razão'] },
  { pergunta: 'Qual é o tema central da obra "Assim Falou Zaratustra", de Nietzsche?', opcoes: ['O eterno retorno', 'A moral dos escravos', 'O super-homem', 'A metafísica'] },
  { pergunta: 'O que é a "alegoria da caverna" de Platão?', opcoes: ['Uma metáfora sobre a política', 'Uma teoria sobre o conhecimento', 'Uma narrativa sobre a virtude', 'Uma reflexão sobre a justiça'] },
  { pergunta: 'Quem é considerado o "pai da dúvida metódica"?', opcoes: ['Sócrates', 'Hume', 'Descartes', 'Spinoza'] },
  { pergunta: 'O que caracteriza o "imperativo categórico" de Kant?', opcoes: ['A ética utilitarista', 'A ação pela felicidade', 'A moral universal', 'A busca pelo prazer'] },
  { pergunta: 'Qual filósofo defendia que "o homem é a medida de todas as coisas"?', opcoes: ['Sócrates', 'Protágoras', 'Heráclito', 'Parmênides'] },
  { pergunta: 'O que significa "tabula rasa" no empirismo de John Locke?', opcoes: ['Um estado de virtude', 'Uma mente vazia ao nascer', 'A ausência de moral', 'A liberdade absoluta'] },
  { pergunta: 'Qual é a principal crítica de Marx ao capitalismo?', opcoes: ['A exploração do trabalhador', 'A falta de liberdade individual', 'A ineficiência econômica', 'O desrespeito à natureza'] },
];

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {questoes.map((questao, index) => (
          <Stack.Screen key={index} name={`Questao${index}`}>
            {() => (
              <View style={styles.container}>
                <BarraProgresso progresso={(index + 1) / questoes.length} />
                <Questao
                  pergunta={questao.pergunta}
                  opcoes={questao.opcoes}
                  proximaTela={index < questoes.length - 1 ? `Questao${index + 1}` : null}
                />
              </View>
            )}
          </Stack.Screen>
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f3f4f6',
  },
});
