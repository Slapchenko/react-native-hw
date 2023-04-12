import React, { useState } from "react";

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
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("window");

const initialState = {
  login: "",
  email: "",
  password: "",
};

const RegistrationScreen = () => {
  const [state, setState] = useState(initialState);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const formMargin = height * (Platform.OS === "ios" ? 0.22 : 0.16);

  const handleInputChange = (value, fieldName) => {
    setState((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const handleSubmit = () => {
    if (!state.login || !state.email || !state.password) {
      console.log("Please fill in all fields");
      return;
    }

    console.log(state);
    setState(initialState);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/photo-bg.jpg")}
        />
        <View
          style={[
            styles.form,
            { marginBottom: isShowKeyboard ? formMargin : 0 },
          ]}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
          >
            <Text style={styles.formTitle}> Регистрация </Text>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
              value={state.login}
              onChangeText={(value) => handleInputChange(value, "login")}
            />
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              placeholderTextColor="#BDBDBD"
              onFocus={() => setIsShowKeyboard(true)}
              value={state.email}
              onChangeText={(value) => handleInputChange(value, "email")}
            />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={[styles.input, styles.inputLastChild]}
                placeholder="Пароль"
                placeholderTextColor="#BDBDBD"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
                onChangeText={(value) => handleInputChange(value, "password")}
                secureTextEntry={!showPassword}
              />
              <TouchableOpacity
                style={styles.passwordBtn}
                onPress={togglePasswordVisibility}
              >
                <Text style={styles.passwordBtnText}>
                  {showPassword ? "Скрыть" : "Показать"}
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.submitBtn}
            onPress={handleSubmit}
          >
            <Text style={styles.submitBtnTitle}>Зарегистрироваться</Text>
          </TouchableOpacity>
          <Text style={styles.signInLink}> Уже есть аккаунт? Войти </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: -1,
  },
  form: {
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingTop: 92,
    paddingBottom: 45,
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
    position: "relative",
    marginBottom: 16,
    height: 50,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#E8E8E8",
    borderRadius: 8,
    padding: 16,
  },
  inputLastChild: {
    marginBottom: 43,
  },
  passwordBtn: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  passwordBtnText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#1B4371",
  },
  submitBtn: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    height: 51,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    marginBottom: 16,
  },
  submitBtnTitle: {
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

export default RegistrationScreen;
