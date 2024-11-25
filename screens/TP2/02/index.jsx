import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

const Exercicio2 = () => {
    const itens = [
        { id: 1, titulo: 'Item A', imagem: 'https://picsum.photos/200' },
        { id: 2, titulo: 'Item B', imagem: 'https://picsum.photos/250' },
        { id: 3, titulo: 'Item C', imagem: 'https://picsum.photos/300' }
    ];

    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={estilos.container}>
            {itens.map((item) => (
                <View key={item.id} style={estilos.item}>
                    <Image source={{ uri: item.imagem }} style={estilos.imagem} />
                    <Text style={estilos.texto}>{item.titulo}</Text>
                </View>
            ))}
        </ScrollView>
    );
};

const estilos = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 10,
        backgroundColor: '#FFFFFF',
    },
    item: {
        backgroundColor: '#45b1f5',
        borderRadius: 5,
        padding: 10,
        marginHorizontal: 5,
        alignItems: 'center',
        width: 120,
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

export default Exercicio2;
