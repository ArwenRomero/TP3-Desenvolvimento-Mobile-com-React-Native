import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import ListaDeItens from './ListaDeItens';
import SelecaoDeOrdem from './SelecaoDeOrdem';

export default function Aplicativo() {
  const [ordemAtual, definirOrdemAtual] = useState('nome-asc');

  const itens = [
    { id: '1', nome: 'Café', preco: 5.0 },
    { id: '2', nome: 'Açúcar', preco: 3.5 },
    { id: '3', nome: 'Leite', preco: 4.0 },
    { id: '4', nome: 'Pão', preco: 2.5 },
  ];

  return (
    <View style={estilos.conteiner}>
      <SelecaoDeOrdem definirOrdem={definirOrdemAtual} />
      <ListaDeItens itens={itens} ordem={ordemAtual} />
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    paddingTop: 40,
    backgroundColor: '#f7f9fc',
  },
});
