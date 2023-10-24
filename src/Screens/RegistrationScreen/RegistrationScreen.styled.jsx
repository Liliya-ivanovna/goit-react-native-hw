import styled,{css} from '@emotion/native';

export const BackgrImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;
export const RegistrationView = styled.View`
  border-radius: 25px 25px 0px 0px;
  background: #ffffff;
  width: 100%;
  height: 549px;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
  justify-content: start;
`;
export const AvatarView = styled.View`
  width: 120px;
  height: 120px;
  top: -60px;
`;
export const AddAvatarButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 16px;
  right: -12px;
`;
export const StyledViewInput = styled.View`
  width: 100%;
  
`;
export const ViewInputs = styled.View`
  gap: 16px;
  align-items: center;
  margin-top: 33px;
  margin-bottom: 43px;
`;
export const Title = styled.Text`
 font-family: Roboto-Regular;
font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #212121;
`;
export const RegistrationButton = styled.TouchableOpacity`
  width: 100%;
  margin-bottom: 16px;
  padding: 16px;
  align-items: center;
  border-radius: 100px;
  background-color: #ff6c00;
`;

export const RegistrationButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
`;
export const TextLink = styled.Text`
  font-size: 16px;
  font-family: Roboto-Regular;
  color: #1B4371;
line-height:18.75px;
`;
export const PasswordButton = styled.TouchableOpacity`
  position: absolute;
  right: 16px;
`;

export const PasswordButtonText = styled.Text`
  font-size: 16px;
  color: #1B4371;
  font-family: Roboto-Regular;

`;

export const PasswordView = styled.View`
 flex-direction: row;
  align-items: center;
`;
export const SignInButtonText = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #1B4371;
  text-decoration-line: underline;
  text-decoration-style: solid;
`;

export const SignInWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;
 export const InputStyle=styled.TextInput`
 width:100%;
 height: 50px;
  padding: 16px;
  font-size: 16px;
  border-width: 1px;
  border-radius: 8px;
  border-color: #e8e8e8;
  background-color: #f6f6f6;
  color:#BDBDBD;
 ${(props)=>props.isFocused&&
css`
border-color:#ff6c00;
background-color:#fff;
`}
 `;

export const ErrorText = styled.Text`
font-family: Roboto-Regular;
font-size: 10px;
color: #ff0000;

`;