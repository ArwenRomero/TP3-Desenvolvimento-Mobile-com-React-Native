import { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

const ProposicoesLista = () => {
    const [conteudo, definirConteudo] = useState([]);
    const [paginaAtual, definirPaginaAtual] = useState(1);
    const [carregando, definirCarregando] = useState(false);

    const buscarProposicoes = async () => {
        if (carregando) return;
        definirCarregando(true);
        try {
            const resposta = await fetch(`https://dadosabertos.camara.leg.br/api/v2/proposicoes?pagina=${paginaAtual}&itens=10`);
            const resultado = await resposta.json();
            definirConteudo([...conteudo, ...resultado.dados]);
            definirPaginaAtual(paginaAtual + 1);
        } catch (erro) {
            console.error(erro);
        } finally {
            definirCarregando(false);
        }
    };

    useEffect(() => {
        buscarProposicoes();
    }, []);

    const renderizarItem = ({ item }) => (
        <View style={estilos.cartao}>
            <Text style={estilos.titulo}>{item.ementa || 'Sem título disponível'}</Text>
            <Text style={estilos.identificador}>ID: {item.id}</Text>
        </View>
    );

    return (
        <View style={estilos.conteiner}>
            {carregando && paginaAtual === 1 ? (
                <ActivityIndicator size="large" color="#0288d1" />
            ) : (
                <FlatList
                    data={conteudo}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={renderizarItem}
                    onEndReached={buscarProposicoes}
                    onEndReachedThreshold={0.5}
                />
            )}
        </View>
    );
};

const estilos = StyleSheet.create({
    conteiner: {
        flex: 1,
        padding: 12,
        backgroundColor: '#e3f2fd',
    },
    cartao: {
        backgroundColor: '#ffffff',
        padding: 20,
        marginBottom: 12,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#0288d1',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    titulo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0288d1',
        marginBottom: 5,
    },
    identificador: {
        fontSize: 14,
        color: '#4f4f4f',
    },
});

export default ProposicoesLista;
