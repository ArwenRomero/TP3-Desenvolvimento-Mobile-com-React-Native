import { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/Home/index.jsx";
import AcordoScreen from "./screens/Acordo/index.jsx";
import DesacordoScreen from "./screens/Desacordo/index.jsx";

const Tab = createBottomTabNavigator();

export default function App() {
  const [proposicoes, definirProposicoes] = useState([]);
  const [respostasUsuario, definirRespostasUsuario] = useState({});

  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Proposições">
          {() => (
            <HomeScreen
              proposicoes={proposicoes}
              definirProposicoes={definirProposicoes}
              respostasUsuario={respostasUsuario}
              definirRespostasUsuario={definirRespostasUsuario}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Concordei">
          {() => (
            <AcordoScreen
              proposicoes={proposicoes}
              respostasUsuario={respostasUsuario}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Discordei">
          {() => (
            <DesacordoScreen
              proposicoes={proposicoes}
              respostasUsuario={respostasUsuario}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}
