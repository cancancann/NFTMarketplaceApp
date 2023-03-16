import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { useFont } from "expo-font";

import Home from "./screens/Home";
import Details from "./screens/Details";

const App = () => {
  const Stack = createStackNavigator();
  
  const theme = {
    ...DefaultTheme,
    color:{
      ...DefaultTheme.colors,
      background:"transparent"
    }
  }

  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
