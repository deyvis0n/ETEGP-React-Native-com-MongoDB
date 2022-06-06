import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginView } from './views/LoginView';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Login View"
            component={LoginView}
            options={{ title: "Read it Later - Maybe" }}
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
