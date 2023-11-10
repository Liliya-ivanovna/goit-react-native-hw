import React, { useState, useReducer } from "react";
import { useInputReducer } from "../../hooks/hookUseReducer";
import {
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  View,
  Image,
} from "react-native";
import {
  loginValidator,
  emailValidator,
  passwordValidator,
} from "../../validators";
import {
  SignInWrapper,
  ErrorText,
  SignInButtonText,
  InputStyle,
  PasswordView,
  PasswordButton,
  PasswordButtonText,
  Title,
  BackgrImage,
  RegistrationButtonText,
  RegistrationButton,
  RegistrationView,
  AvatarView,
  AddAvatarButton,
  ViewInputs,
} from "./RegistrationScreen.styled";
import bgImage from "../../../assets/bg_photo.png";
import addImage from "../../../assets/add.png";
import avatarImage from "../../../assets/avatar.png";

const RegistrationScreen = ({ navigation }) => {
  const [errorLogin, setErrorLogin] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [inputsValue, dispatch] = useReducer(useInputReducer, {
    login: "",
    email: "",
    password: "",
  });
  const defaultBorderColor = "#E8E8E8";
  const accentBorderColor = "#FF6C00";
  const [loginBorderColor, setLoginBorderColor] = useState(defaultBorderColor);
  const [emailBorderColor, setEmailBorderColor] = useState(defaultBorderColor);
  const [passBorderColor, setPassBorderColor] = useState(defaultBorderColor);

  const { login, email, password } = inputsValue;

  const onPressButton = () => {
    if (!loginValidator(login)) {
      setErrorLogin(true);
      return;
    } else {
      setErrorLogin(false);
    }
    if (!emailValidator(email)) {
      setErrorEmail(true);
      return;
    } else {
      setErrorEmail(false);
    }

    if (!passwordValidator(password)) {
      setErrorPassword(true);
      return;
    } else {
      setErrorPassword(false);
    }

    dispatch({ type: "login", payload: "" });
    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });
    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    });
  };
  console.log(inputsValue);

  return (
    <BackgrImage source={bgImage}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <RegistrationView>
            <AvatarView>
              <Image source={avatarImage} />
              <AddAvatarButton>
                <Image source={addImage} />
              </AddAvatarButton>
            </AvatarView>
            <Title>Реєстрація</Title>
            <ViewInputs>
              <InputStyle
                onChangeText={(text) => {
                  dispatch({ type: "login", payload: text });
                }}
                name="login"
                placeholder="Логін"
                value={login}
                textContentType="username"
                keyboardType="default"
                borderColor={loginBorderColor}
                onFocus={() => {
                  setLoginBorderColor(accentBorderColor);
                }}
                onBlur={() => setLoginBorderColor(defaultBorderColor)}
              />
              {errorLogin && <ErrorText>Невірний формат логіну</ErrorText>}
              <InputStyle
                onChangeText={(text) => {
                  dispatch({ type: "email", payload: text });
                }}
                name="email"
                placeholder="Адреса електронної пошти"
                value={email}
                keyboardType="email-address"
                textContentType="emailAddress"
                borderColor={emailBorderColor}
                onFocus={() => {
                  setEmailBorderColor(accentBorderColor);
                }}
                onBlur={() => setEmailBorderColor(defaultBorderColor)}
              />
              {errorEmail && (
                <ErrorText>Невірний формат електронної пошти</ErrorText>
              )}
              <PasswordView>
                <InputStyle
                  name="password"
                  placeholder="Пароль"
                  value={password}
                  secureTextEntry={passwordVisible}
                  textContentType="password"
                  onChangeText={(text) => {
                    dispatch({ type: "password", payload: text });
                  }}
                  borderColor={passBorderColor}
                  onFocus={() => {
                    setPassBorderColor(accentBorderColor);
                  }}
                  onBlur={() => setPassBorderColor(defaultBorderColor)}
                />
                <PasswordButton
                  onPress={() => setPasswordVisible(!passwordVisible)}>
                  <PasswordButtonText>Показати</PasswordButtonText>
                </PasswordButton>
              </PasswordView>
              {errorPassword && <ErrorText>Невірний формат паролю</ErrorText>}
            </ViewInputs>
            <RegistrationButton onPress={onPressButton}>
              <RegistrationButtonText>Зареєструватися</RegistrationButtonText>
            </RegistrationButton>
            <View>
              <SignInWrapper>
                <SignInButtonText>Вже є акаунт?</SignInButtonText>
                <SignInButtonText onPress={() => navigation.navigate("Login")}>
                  Увійти
                </SignInButtonText>
              </SignInWrapper>
            </View>
          </RegistrationView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </BackgrImage>
  );
};
export default RegistrationScreen;
