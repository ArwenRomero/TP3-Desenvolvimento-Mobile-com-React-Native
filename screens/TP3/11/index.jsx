import { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import ListagemItens from './ListagemItens';
import ControleOrdenacao from './ControleOrdenacao';

export default function Aplicativo() {
  const [ordem, definirOrdem] = useState('nome-asc');
  const [itens, definirItens] = useState([]);
  const [emCarregamento, definirCarregamento] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const dados = [
        { id: '1', nome: 'Café', preco: 5.0 },
        { id: '2', nome: 'Açúcar', preco: 3.5 },
        { id: '3', nome: 'Leite', preco: 4.0 },
        { id: '4', nome: 'Pão', preco: 2.5 },
      ];
      definirItens(dados);
      definirCarregamento(false);
    }, 2000);
  }, []);

  return (
    <View style={estilos.conteiner}>
      <ControleOrdenacao definirOrdem={definirOrdem} />
      <ListagemItens itens={itens} ordem={ordem} emCarregamento={emCarregamento} />
    </View>
  );
}

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#e3f2fd',
  },
});
