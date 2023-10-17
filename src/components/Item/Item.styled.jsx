import styled, { css } from '@emotion/native';

import { Feather } from "@expo/vector-icons";

export const ItemWrapper = styled.View`
  padding-bottom: 34px;
  gap: 8px;
`;

export const ItemTitle = styled.Text`
  font-family: Roboto-Regular;
  font-size: 16px;
  font-weight: 500;
  color: #212121;
`;

export const ItemDescriptionWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const CommentIcon = styled(Feather)`
  transform: rotateY(180deg);
`;

export const CommentCounter = styled.Text`
  margin-left: 6px;
  font-family: Roboto-Regular;
  font-size: 16px;
`;

export const LikeIcon = styled(Feather)`
  margin-left: 24px;
`;

export const LikesCounter = styled.Text`
margin-left: 6px;
  font-family: Roboto-Regular;
  font-size: 16px;
`;

export const MapPinIcon = styled(Feather)`
  margin-left: auto;
`;

export const LocationText = styled.Text`
  margin-left: 4px;
  font-family: Roboto-Regular;
  font-size: 16px;
  color: #212121;
  text-decoration: underline;
`;