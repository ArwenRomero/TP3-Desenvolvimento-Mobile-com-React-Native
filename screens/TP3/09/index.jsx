import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ListaDeItens from './ListaDeItens.jsx';
import ControleDeOrdem from './ControleDeOrdem.jsx';

export default function Aplicativo() {
  const [criterioDeOrdem, setCriterioDeOrdem] = useState('asc'); 

  const itens = [
    { id: '1', nome: 'Café' },
    { id: '2', nome: 'Açúcar' },
    { id: '3', nome: 'Leite' },
    { id: '4', nome: 'Pão' },
  ];

  return (
    <View style={estilos.container}>
      <ControleDeOrdem definirOrdem={setCriterioDeOrdem} />
      <ListaDeItens itens={itens} ordem={criterioDeOrdem} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#f8f8f8',
  },
});
