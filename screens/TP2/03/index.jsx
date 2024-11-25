import React from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, FlatList } from 'react-native';

const Exercicio3 = () => {
    const itens = [
        { id: '1', titulo: 'Item A', imagem: 'https://picsum.photos/300?random=1' },
        { id: '2', titulo: 'Item B', imagem: 'https://picsum.photos/300?random=2' },
        { id: '3', titulo: 'Item C', imagem: 'https://picsum.photos/300?random=3' },
        { id: '4', titulo: 'Item D', imagem: 'https://picsum.photos/300?random=4' },
    ];

    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={itens}
                renderItem={({ item }) => (
                    <View style={estilos.item}>
                        <Image source={{ uri: item.imagem }} style={estilos.imagem} />
                        <Text style={estilos.texto}>{item.titulo}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    item: {
        backgroundColor: '#45b1f5',
        borderRadius: 5,
        flex: 1,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
    },
    imagem: {
        width: 100,
        height: 100,
        borderRadius: 5,
        marginBottom: 5,
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Exercicio3;
