import styled from '@emotion/native';

import { Feather } from "@expo/vector-icons";

export const BackgroundView = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
`;

export const ImageWrapper = styled.View`
  width: 100%;
  height: 240px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background-color: #F6F6F6;

  overflow: hidden;
`;

export const HelpText = styled.Text`
  width: 100%;
  margin-top: 8px;
  font-family: Roboto-Regular;
  font-size: 16px;
  font-weight: 400;
  color: #BDBDBD;
`;

export const InputWrapper = styled.View`
  width: 100%;
  margin-top: 32px;
  gap: 16px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #E8E8E8;
`;

export const MapInput = styled.TextInput`
  height: 50px;
  border-bottom-width: 1px;
  border-bottom-color: #E8E8E8;
  padding-left: 28px;
`;

export const MapInputWrapper = styled.View``;

export const MapInputIcon = styled(Feather)`
  position: absolute;
  left: 0;
  top: 13px;
`;

export const PostButton = styled.TouchableOpacity`
  width: 100%;
  margin-top: 32px;
  padding: 16px 32px;
  border-radius: 100px;
`;

export const PostButtonText = styled.Text`
  text-align: center;
  font-family: Roboto-Regular;
  font-size: 16px;
`;

export const DeleteButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 34px;
  width: 70px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background-color: #f6f6f6;
`;

export const CameraButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #fff;
  opacity: 0.5;
`;

export const CameraView = styled.View`
  flex: 1;
  justify-content: center;  
  background-color: transparent;
`;

export const PhotoView = styled.Image`
  width: 100%;
  height: 100%;
`;