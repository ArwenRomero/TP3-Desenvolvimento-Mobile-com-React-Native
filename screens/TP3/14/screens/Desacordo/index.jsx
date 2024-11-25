import { View, Text, StyleSheet } from 'react-native';

export default function DesacordoScreen({ route }) {
  const { respostasUsuario, proposicoes } = route.params || {};

  const discordaram = proposicoes?.filter(prop => !respostasUsuario[prop.id]);

  return (
    <View style={estilos.container}>
      {discordaram?.map((prop, index) => (
        <Text key={index} style={estilos.texto}>{prop.statement}</Text>
      ))}
    </View>
  );
}

const estilos = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16, 
    backgroundColor: '#f1f8e9' 
  },
  texto: { 
    marginBottom: 12, 
    fontSize: 18, 
    color: '#37474f', 
    fontWeight: '500' 
  },
});
