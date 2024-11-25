import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import ItemProposicao from "../../Components/ProposicaoItem/index.jsx";
import { buscarProposicoes } from "../../services/index.jsx";

const TelaProposicoes = () => {
  const [proposicoes, definirProposicoes] = useState([]);
  const [atualizando, definirAtualizando] = useState(false);

  const carregarProposicoes = async () => {
    const dados = await buscarProposicoes();
    definirProposicoes(dados);
  };

  const atualizarLista = async () => {
    definirAtualizando(true);
    await carregarProposicoes();
    definirAtualizando(false);
  };

  useEffect(() => {
    carregarProposicoes();
  }, []);

  return (
    <View style={estilos.conteiner}>
      {proposicoes.length === 0 ? (
        <Text style={estilos.mensagem}>Nenhuma proposição encontrada.</Text>
      ) : (
        <FlatList
          data={proposicoes}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <ItemProposicao titulo={item.titulo} descricao={item.descricaoTipo} />
          )}
          refreshing={atualizando}
          onRefresh={atualizarLista}
        />
      )}
    </View>
  );
};

const estilos = StyleSheet.create({
  conteiner: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f1f8e9",
  },
  mensagem: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 20,
    color: "#0288d1",
  },
});

export default TelaProposicoes;
