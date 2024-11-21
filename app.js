import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import DetailScreen from "./screens/DetailScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ title: "Resep Masakan" }}
        />
        <Stack.Screen
          name="DetailScreen"
          component={DetailScreen}
          options={{ title: "Detail Resep" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
