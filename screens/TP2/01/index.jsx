import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Exercicio1 = () => {
    const itens = ["Item A", "Item B", "Item C"];

    return (
        <View style={estilos.container}>
            {itens.map((item, index) => (
                <View key={index} style={estilos.item}>
                    <Text style={estilos.texto}>{item}</Text>
                </View>
            ))}
        </View>
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
        padding: 20,
        marginVertical: 8,
        borderRadius: 5,
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 16,
    },
});

export default Exercicio1;