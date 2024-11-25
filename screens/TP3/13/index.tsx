import { SafeAreaView, StyleSheet } from "react-native";
import PropositionListScreen from "./screens/ProposicaoListScreen/index.jsx";

const Aplicativo = () => {
  return (
    <SafeAreaView style={estilos.areaSegura}>
      <TelaProposicoes />
    </SafeAreaView>
  );
};

const estilos = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: "#e3f2fd",
  },
});

export default Aplicativo;
