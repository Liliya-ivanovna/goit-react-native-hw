import styled from '@emotion/native';

export const BackgroundView = styled.ImageBackground`
  width: 100%;
  height: 100%;
  padding-top: 32px;
  padding-left: 16px;
  padding-right: 16px;
  background-color: #fff;
  
`;
export const Icon=styled.View`
 margin-right:10px; 
`
export const ProfileWrapper = styled.View`
  flex-direction: row;
  align-items: center;`;

export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 16px;
`;

export const ProfileDetailsWrapper = styled.View`
  margin-left: 8px;
`;

export const ProfileName = styled.Text`
  font-family: Roboto-Regular;
  font-size: 13px;
  font-weight: 700;
  color: #212121;
`;

export const ProfileEmail = styled.Text`
  font-family: Roboto-Regular;
  font-size: 11px;
  font-weight: 400;
  color: rgba(33, 33, 33, 0.80);
`;