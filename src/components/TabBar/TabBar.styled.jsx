import styled, { css } from '@emotion/native';

export const TabBarContainer = styled.View`
  height: 83px;
  padding-top: 9px;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  background: #FFF;
  border-top-width: 1px;
  border-top-color: rgba(0, 0, 0, 0.30);
`;

export const TabBarButton = styled.TouchableOpacity`
  width: 70px;
  height: 40px;
  justify-content: center;
  align-items: center;
  background: #FF6C00;
  border-radius: 20px;
`;