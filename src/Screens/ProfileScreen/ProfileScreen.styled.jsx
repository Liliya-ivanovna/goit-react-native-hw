import styled from '@emotion/native';

export const BackgroundView = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: flex-end;
  align-items: center;
`;

export const Container = styled.View`
  width: 100%;
  max-height: 85%;
  padding-top: 92px;
  padding-left: 16px;
  padding-right: 16px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  background-color: #fff;
  align-items: center;
  justify-content: start;
`;

export const LogoutButton = styled.TouchableOpacity`
  position: absolute;
  top: 22px;
  right: 16px;
`;

export const AvatarWrapper = styled.View`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  background-color: #F6F6F6;
  position: absolute;
  top: -60px;
`;

export const AvatarImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const AddAvatarButtonWrapper = styled.TouchableOpacity`
  position: absolute;
  bottom: 16px;
  right: -12px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 50px;
  border-width: 1px;
`;

export const UserName = styled.Text`
  font-family: Roboto-Regular;
  font-size: 30px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #212121;
`;

export const List = styled.FlatList`
  width: 100%;
  margin-top: 33px;
`;