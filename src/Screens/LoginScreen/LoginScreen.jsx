import React, { useState, useReducer } from "react";
import { useInputReducer } from "../../hooks/hookUseReducer";
import { TextInput, View} from "react-native";
import { emailValidator, passwordValidator } from "../../validators";
import {
  SignInWrapper,
  SignInButtonText,
  PasswordView,
  PasswordButton,
  PasswordButtonText,
  Title,
  BackgrImage,
  RegistrationButtonText,
  RegistrationButton,
  RegistrationView,
  StyledViewInput,
  ViewInputs,
} from "./LoginScreen.styled";
import bgImage from "../../../assets/bg_photo.png";

const LoginScreen = () => {
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorPassword, setErrorPassword] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [inputsValue, dispatch] = useReducer(useInputReducer, {
    email: "",
    password: "",
  });

  const { email, password } = inputsValue;

  const onPressButton = () => {
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
    dispatch({ type: "email", payload: "" });
    dispatch({ type: "password", payload: "" });
  };
  console.log(inputsValue);

  return (
    <BackgrImage source={bgImage}>
      <RegistrationView>
        <Title>Увійти</Title>
        <ViewInputs>
          <StyledViewInput>
            <TextInput
              onChangeText={(text) => {
                dispatch({ type: "email", payload: text });
              }}
              name="email"
              placeholder="Адреса електронної пошти"
              value={email}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
          </StyledViewInput>
          <StyledViewInput>
            <PasswordView>
              <TextInput
                name="password"
                placeholder="Пароль"
                value={password}
                secureTextEntry={passwordVisible}
                textContentType="password"
                onChangeText={(text) => {
                  dispatch({ type: "password", payload: text });
                }}
              />
              <PasswordButton
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <PasswordButtonText>Показати</PasswordButtonText>
              </PasswordButton>
            </PasswordView>
          </StyledViewInput>
        </ViewInputs>
        <RegistrationButton onPress={onPressButton}>
          <RegistrationButtonText>Увійти</RegistrationButtonText>
        </RegistrationButton>
        <View>
          <SignInWrapper>
            <SignInButtonText>Немає акаунту? Зареєструватися</SignInButtonText>
          </SignInWrapper>
        </View>
      </RegistrationView>
    </BackgrImage>
  );
};
export default LoginScreen;
