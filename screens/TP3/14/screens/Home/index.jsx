import { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";

export default function HomeScreen({
  proposicoes,
  definirProposicoes,
  respostasUsuario,
  definirRespostasUsuario,
}) {
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((resposta) => {
        const formatado = resposta.data.map((post) => ({
          id: post.id,
          declaracao: post.title,
          contagemConcordo: Math.floor(Math.random() * 100),
          contagemDiscordo: Math.floor(Math.random() * 100),
        }));
        definirProposicoes(formatado);
      })
      .catch((erro) => console.error(erro));
  }, []);

  const lidarComResposta = (id, concorda) => {
    definirRespostasUsuario((anterior) => ({ ...anterior, [id]: concorda }));
    definirProposicoes((anterior) =>
      anterior.map((prop) =>
        prop.id === id
          ? {
              ...prop,
              contagemConcordo: concorda
                ? prop.contagemConcordo + 1
                : prop.contagemConcordo,
              contagemDiscordo: !concorda
                ? prop.contagemDiscordo + 1
                : prop.contagemDiscordo,
            }
          : prop
      )
    );
  };

  return (
    <View style={estilos.container}>
      {proposicoes.map((prop, index) => (
        <View key={index} style={estilos.cartao}>
          <Text style={estilos.texto}>{prop.declaracao}</Text>
          <View style={estilos.botoes}>
            <Button
              title="Concordo"
              color="#0288d1"
              onPress={() => lidarComResposta(prop.id, true)}
            />
            <Button
              title="Discordo"
              color="#d32f2f"
              onPress={() => lidarComResposta(prop.id, false)}
            />
          </View>
          <Text style={estilos.resultados}>
            Concordam: {prop.contagemConcordo} | Discordam:{" "}
            {prop.contagemDiscordo}
          </Text>
        </View>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#e3f2fd",
  },
  cartao: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    elevation: 2,
  },
  texto: {
    marginBottom: 8,
    fontSize: 16,
    color: "#37474f",
    fontWeight: "bold",
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  resultados: {
    fontSize: 14,
    color: "#546e7a",
  },
});
