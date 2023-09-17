import React, { useState, useReducer } from "react";
import { useInputReducer } from "../../hooks/hookUseReducer";
import { KeyboardAvoidingView,TouchableWithoutFeedback,
  Keyboard,View} from "react-native";
import { emailValidator, passwordValidator } from "../../validators";
import {
  ErrorText,
  TextInputStyle,
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
  ViewInputs
} from "./LoginScreen.styled";
import bgImage from "../../../assets/bg_photo.png";

const LoginScreen = ({navigation}) => {

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

    navigation.reset({
      index: 0,
      routes: [{ name: "Home" }],
    })
  };
  console.log(inputsValue);

  return (
    <BackgrImage source={bgImage}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <RegistrationView>
        <Title>Увійти</Title>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"}
      keyboardVerticalOffset={32}>
        <ViewInputs>
          <StyledViewInput>
            <TextInputStyle
              onChangeText={(text) => {
                dispatch({ type: "email", payload: text });
              }}
              name="email"
              placeholder="Адреса електронної пошти"
              value={email}
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            {errorEmail && (
                  <ErrorText>Невірний формат електронної пошти</ErrorText>
                )}
          </StyledViewInput>
          <StyledViewInput>
            <PasswordView>
              <TextInputStyle
                name="password"
                placeholder="Пароль"
                value={password}
                secureTextEntry={passwordVisible}
                textContentType="password"
                onChangeText={(text) => {
                  dispatch({ type: "password", payload: text });
                }}
              />
              {errorPassword && (
                  <ErrorText>Невірний формат паролю</ErrorText>
                )}
              <PasswordButton
                onPress={() => setPasswordVisible(!passwordVisible)}>
                <PasswordButtonText>Показати</PasswordButtonText>
              </PasswordButton>
            </PasswordView>
          </StyledViewInput>
        </ViewInputs>
        </KeyboardAvoidingView>
        <RegistrationButton onPress={onPressButton}>
          <RegistrationButtonText>Увійти</RegistrationButtonText>
          
        </RegistrationButton>
        <View>
          <SignInWrapper>
            <SignInButtonText>Немає акаунту? </SignInButtonText>
            <SignInButtonText onPress={() => navigation.navigate("Registration")}
      >Зареєструватися</SignInButtonText>
          </SignInWrapper>
        </View>
      </RegistrationView>
      </TouchableWithoutFeedback>
    </BackgrImage>
  );
};
export default LoginScreen;
