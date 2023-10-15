import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLNOPQRSTUVWXYZ0123456789";

export default function App() {
  const [size, setSize] = useState(10);

  function genPasswd() {
    let passwd = "";

    for (let i = 0, n = charset.length; i < size; i++) {
      passwd += charset.charAt(Math.floor(Math.random() * n));
    }
  }

  return (
    <View style={styles.container}>
      <Image source={require("./src/assets/logo.png")} style={styles.logo} />
      <Text style={styles.senha}>{senha}</Text>
      <Text style={styles.title}>{size} caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          minimumValue={6}
          maximumValue={20}
          maximumTrackTintColor="#ff0000"
          minimumTrackTintColor="#000"
          thumbTintColor="#392de9"
          value={size}
          onValueChange={(e) => setSize(e.toFixed(0))}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={genPasswd}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f3f3ff",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    marginBottom: 40,
  },
  senha: {
    marginBottom: 20,
    fontSize: 20,
    color: "red",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: "#392de9",
    width: "80%",
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 8,
    marginBottom: 18,
  },
  buttonText: { textAlign: "center", color: "#fff", fontSize: 20 },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
