import React, { useState } from "react";

import { StatusBar } from "expo-status-bar";

import { useFonts } from "expo-font";

import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";

export default function App() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("./assets/images/photo-bg.jpg")}
        >
          <View style={styles.regWrapper}>
            <KeyboardAvoidingView
              behavior={Platform.OS == "ios" ? "padding" : "height"}
            >
              <View style={styles.form}>
                <Text style={styles.formTitle}> Регистрация </Text>
                <TextInput
                  style={styles.input}
                  placeholder="Логин"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Адрес электронной почты"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                />
                <TextInput
                  style={[
                    styles.input,
                    { marginBottom: isShowKeyboard ? 160 : 43 },
                  ]}
                  placeholder="Пароль"
                  placeholderTextColor="#BDBDBD"
                  onFocus={() => setIsShowKeyboard(true)}
                />
              </View>
            </KeyboardAvoidingView>

            <TouchableOpacity activeOpacity={0.8} style={styles.buttun}>
              <Text style={styles.buttonTitle}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <Text style={styles.signInLink}> Уже есть аккаунт? Войти </Text>
          </View>
        </ImageBackground>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "flex-end",
  },
  regWrapper: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 78,
    paddingHorizontal: 16,
  },
  formTitle: {
    marginBottom: 32,
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
  },
  buttun: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginBottom: 16,
  },
  buttonTitle: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  signInLink: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#1B4371",
  },
});
