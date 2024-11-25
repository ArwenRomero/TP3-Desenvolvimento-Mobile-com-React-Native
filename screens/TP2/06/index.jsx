import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const Exercicio6 = () => {
    const itens = [
        { id: '1', titulo: 'Item A' },
        { id: '2', titulo: 'Item B' },
        { id: '3', titulo: 'Item C' },
        { id: '4', titulo: 'Item D' },
    ];

    return (
        <SafeAreaView style={estilos.container}>
            <View style={estilos.listaContainer}>
                {itens.map((item) => (
                    <View key={item.id} style={estilos.item}>
                        <Text style={estilos.texto}>{item.titulo}</Text>
                    </View>
                ))}
            </View>
        </SafeAreaView>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    listaContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    item: {
        backgroundColor: '#45b1f5',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Exercicio6;
