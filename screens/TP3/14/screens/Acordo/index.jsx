import { View, Text, StyleSheet } from 'react-native';

export default function AcordoScreen({ route }) {
  const { respostasUsuario, proposicoes } = route.params || {};

  const concordaram = proposicoes?.filter(prop => respostasUsuario[prop.id]);

  return (
    <View style={estilos.container}>
      {concordaram?.map((prop, index) => (
        <Text key={index} style={estilos.texto}>{prop.statement}</Text>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#e3f2fd' 
  },
  texto: { 
    marginBottom: 12, 
    fontSize: 18, 
    color: '#0288d1', 
    fontWeight: '500' 
  },
});
