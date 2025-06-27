import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./assets/src/screens/HomeScreen";
import PostDetailsScreen from "./assets/src/screens/PostDetailsScreen";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "Home", // Default Home title
            headerTitleStyle: {
              color: "#9B28F1",
              fontWeight: "bold",
              fontSize: 22,
            },
            headerTitleAlign: "left",
          }}
        />
        <Stack.Screen name="PostDetails" component={PostDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
