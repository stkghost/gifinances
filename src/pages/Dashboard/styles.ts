import { Feather } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: flex-start;
  flex-direction: row;
`;
export const UserWrapper = styled.View`
  width: 100%;
  padding: 0 24px;
  margin-top: ${RFValue(28)}px;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
  height: ${RFPercentage(14)}px;
`;

export const Photo = styled.Image`
  background-color: #ccc;
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 8px;
`;

export const User = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: 17px;
`;

export const UserHello = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
`;
export const UserName = styled.Text`
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;
`;

export const PowerIcon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`;

export const HightlightCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingHorizontal: 24 },
})`
  width: 100%;
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`;
