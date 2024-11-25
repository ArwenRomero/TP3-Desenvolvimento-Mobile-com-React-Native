import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

const Exercício14 = () => {
  const [categorias, setCategorias] = useState(['Mercado', 'Farmácia', 'Estudos']);
  const [tarefas, setTarefas] = useState({});
  const [novaTarefa, setNovaTarefa] = useState('');
  const [categoriaSelecionada, setCategoriaSelecionada] = useState(null);

  const adicionarTarefa = () => {
    if (novaTarefa && categoriaSelecionada) {
      setTarefas(prev => ({
        ...prev,
        [categoriaSelecionada]: [...(prev[categoriaSelecionada] || []), novaTarefa]
      }));
      setNovaTarefa('');
    }
  };

  const removerTarefa = (categoria, index) => {
    setTarefas(prev => ({
      ...prev,
      [categoria]: prev[categoria].filter((_, i) => i !== index)
    }));
  };

  const selecionarCategoria = (categoria) => {
    setCategoriaSelecionada(categoria);
  };

  return (
    <View style={estilos.container}>
      <View style={estilos.categoriaContainer}>
        <Text style={estilos.titulo}>Categorias</Text>
        {categorias.map((categoria, index) => (
          <TouchableOpacity key={index} onPress={() => selecionarCategoria(categoria)}>
            <Text style={[
              estilos.categoriaTexto,
              categoriaSelecionada === categoria && estilos.categoriaSelecionada
            ]}>
              {categoria}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={estilos.tarefaContainer}>
        <Text style={estilos.titulo}>
          {categoriaSelecionada ? `Tarefas: ${categoriaSelecionada}` : 'Selecione uma categoria'}
        </Text>
        {categoriaSelecionada && (
          <>
            <FlatList
              data={tarefas[categoriaSelecionada] || []}
              renderItem={({ item, index }) => (
                <View style={estilos.tarefaItem}>
                  <Text style={estilos.tarefaTexto}>{item}</Text>
                  <Button title="Remover" color="#45b1f5" onPress={() => removerTarefa(categoriaSelecionada, index)} />
                </View>
              )}
              keyExtractor={(item, index) => `${item}-${index}`}
            />
            <TextInput
              style={estilos.input}
              placeholder="Nova tarefa"
              value={novaTarefa}
              onChangeText={setNovaTarefa}
            />
            <Button title="Adicionar Tarefa" color="#45b1f5" onPress={adicionarTarefa} />
          </>
        )}
      </View>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  categoriaContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  tarefaContainer: {
    flex: 2,
    padding: 10,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#45b1f5',
    marginBottom: 10,
  },
  categoriaTexto: {
    fontSize: 18,
    padding: 10,
    color: '#333',
  },
  categoriaSelecionada: {
    backgroundColor: '#45b1f5',
    color: 'white',
  },
  tarefaItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tarefaTexto: {
    fontSize: 16,
  },
  input: {
    borderColor: '#45b1f5',
    borderWidth: 1,
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
});

export default Exercício14;