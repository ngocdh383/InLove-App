import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MainScreen } from "./src";

type MainParamList = {
  MainScreen: undefined;
};

const MainStack = createNativeStackNavigator<MainParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <MainStack.Navigator>
        <MainStack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
