import React from "react";
import { HightlightCard } from "../../components/HightlightCard";
import * as S from "./styles";

export function Dashboard() {
  return (
    <S.Container>
      <S.Header>
        <S.UserWrapper>
          <S.UserInfo>
            <S.Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/45542802?v=4",
              }}
            />
            <S.User>
              <S.UserHello>Olá,</S.UserHello>
              <S.UserName>Gabriel</S.UserName>
            </S.User>
          </S.UserInfo>
          <S.PowerIcon name="power" />
        </S.UserWrapper>
      </S.Header>
      <S.HightlightCards>
        <HightlightCard
          type="up"
          title="Entradas"
          amount="R$ 2.000"
          lastTransaction="07 de Dezembro"
        />
        <HightlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.000"
          lastTransaction="07 de Dezembro"
        />
        <HightlightCard
          type="total"
          title="Total"
          amount="R$ 1.000"
          lastTransaction="07 de Dezembro"
        />
      </S.HightlightCards>
    </S.Container>
  );
}
