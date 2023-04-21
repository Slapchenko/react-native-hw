import { useFonts } from "expo-font";

import { View, useWindowDimensions } from "react-native";

import RegistrationScreen from "./Screens/RegistrationScreen";
import LoginScreen from "./Screens/LoginScreen";

const App = () => {
  const { height, width } = useWindowDimensions();

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1, height, width }}>
      <RegistrationScreen />
      {/* {<LoginScreen />} */}
    </View>
  );
};

export default App;
