import { View, StyleSheet } from 'react-native';

const BarraProgresso = ({ progresso }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.progresso, { width: `${progresso * 100}%` }]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 12,
    width: '100%',
    backgroundColor: '#dcdcdc',
    borderRadius: 6,
    overflow: 'hidden',
    marginVertical: 20,
  },
  progresso: {
    height: '100%',
    backgroundColor: '#0288d1',
  },
});

export default BarraProgresso;
