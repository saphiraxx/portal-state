import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import { useState } from "react";

export default function App() {
  const initialImage = require("./assets/developapp.png");
  const secondImage = require("./assets/rick.png");

  const [image, setImage] = useState(initialImage);
  const [buttonVisible, setButtonVisible] = useState(true);

  const handleChange = () => {
    setImage(secondImage);
    setButtonVisible(false);
  };

  const handlePress = () => {
    setImage(initialImage);
    setButtonVisible(true);
  };

  return (
    <TouchableWithoutFeedback
      onPress={image === secondImage ? handlePress : undefined}
    >
      <ImageBackground source={image} style={styles.background}>
        <View style={styles.container}>
          {buttonVisible && (
            <TouchableOpacity style={styles.button} onPress={handleChange}>
              <Text style={styles.buttonText}>Click Here</Text>
            </TouchableOpacity>
          )}
          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10, // deixa arredondado
    elevation: 5, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#000", // cor do texto
    fontSize: 18,
    fontWeight: "bold",
  },
});
