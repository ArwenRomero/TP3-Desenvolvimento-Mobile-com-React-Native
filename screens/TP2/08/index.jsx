import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, FlatList, Image } from 'react-native';

const contatos = [
    { id: '1', nome: 'Arwen Romero', endereco: 'Rua das Flores, 123', numero: '(11) 91234-5678', avatar: 'https://picsum.photos/50' },
    { id: '2', nome: 'Bruno Lima', endereco: 'Av. Paulista, 123', numero: '(11) 98765-4321', avatar: 'https://picsum.photos/50' },
    { id: '3', nome: 'Carla Souza', endereco: 'Rua do Sol, 123', numero: '(99) 99999-6789', avatar: 'https://picsum.photos/50' },
    { id: '4', nome: 'Daniel Rocha', endereco: 'Av. Rio Branco, 111', numero: '(99) 88888-5432', avatar: 'https://picsum.photos/50' },
];

const Contato = ({ nome, endereco, numero, avatar }) => (
    <View style={estilos.contato}>
        <Image source={{ uri: avatar }} style={estilos.avatar} />
        <View style={estilos.infoContainer}>
            <Text style={estilos.nome}>{nome}</Text>
            <Text style={estilos.endereco}>{endereco}</Text>
            <Text style={estilos.numero}>{numero}</Text>
        </View>
    </View>
);

const Exercicio8 = () => {
    return (
        <SafeAreaView style={estilos.container}>
            <FlatList
                data={contatos}
                renderItem={({ item }) => (
                    <Contato 
                        nome={item.nome} 
                        endereco={item.endereco} 
                        numero={item.numero} 
                        avatar={item.avatar} 
                    />
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
    },
    contato: {
        flexDirection: 'row',
        backgroundColor: '#45b1f5',
        borderRadius: 8,
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    nome: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    endereco: {
        fontSize: 14,
        color: '#FFFFFF',
    },
    numero: {
        fontSize: 14,
        color: '#FFFFFF',
    },
});

export default Exercicio8;
