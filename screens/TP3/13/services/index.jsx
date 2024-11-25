export const buscarProposicoes = async () => {
  try {
    const resposta = await fetch(
      "https://dadosabertos.camara.leg.br/api/v2/proposicoes"
    );
    const dados = await resposta.json();
    return dados.dados || [];
  } catch (erro) {
    console.error("Erro ao carregar proposições:", erro);
    return [];
  }
};
