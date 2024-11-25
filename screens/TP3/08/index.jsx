import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import BarraDeBusca from './BarraDeBusca';
import ListaDeItens from './ListaDeItens';

const dadosDosProdutos = [
  { id: '1', nome: 'Camiseta', descricao: 'Camiseta de algodão branca' },
  { id: '2', nome: 'Tênis', descricao: 'Tênis esportivo confortável' },
  { id: '3', nome: 'Boné', descricao: 'Boné ajustável preto' },
  { id: '4', nome: 'Calça Jeans', descricao: 'Calça jeans azul escura' },
  { id: '5', nome: 'Jaqueta', descricao: 'Jaqueta de couro sintético' },
];

export default function Aplicativo() {
  const [itens, setItens] = useState(dadosDosProdutos);

  const filtrarItens = (texto) => {
    const resultados = dadosDosProdutos.filter(produto =>
      produto.nome.toLowerCase().includes(texto.toLowerCase()) ||
      produto.descricao.toLowerCase().includes(texto.toLowerCase())
    );
    setItens(resultados);
  };

  return (
    <View style={estilos.container}>
      <BarraDeBusca aoFiltrar={filtrarItens} />
      <ListaDeItens itens={itens} />
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f4f4f4',
  },
});
