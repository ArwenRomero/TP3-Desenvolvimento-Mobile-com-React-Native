import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList } from 'react-native';

const Exercicio4 = () => {
    const itens = [
        { id: '1', titulo: 'Item A' },
        { id: '2', titulo: 'Item B' },
        { id: '3', titulo: 'Item C' },
        { id: '4', titulo: 'Item D' },
    ];

    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={itens}
                renderItem={({ item }) => (
                    <View style={estilos.item}>
                        <Text style={estilos.texto}>{item.titulo}</Text>
                    </View>
                )}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 10,
        justifyContent: 'flex-start',
    },
    item: {
        backgroundColor: '#45b1f5',
        borderRadius: 5,
        padding: 10,
        marginVertical: 5,
        alignSelf: 'flex-end',
        width: 100,
    },
    texto: {
        color: '#FFFFFF',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Exercicio4;
