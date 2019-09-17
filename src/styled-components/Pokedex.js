import React from "react";
import styled from "styled-components";
import { colors } from "../variables";

const Container = styled.div`
  width: 300px;
  margin: auto;
  margin-bottom: 30px;
  padding: 30px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  background-color: ${colors.white};
  box-shadow: 2px 2px 5px ${colors.greyShadow};
  border-radius: 7px;
`;

const Name = styled.h2`
  text-transform: capitalize;
  font-size: 30px;
  color: ${colors.text};
  margin: 0;
`;

const Image = styled.img`
  width: 150px;
`;

const TypeLabel = styled.p`
  color: ${colors.label};
  font-size: 18px;
  font-weight: lighter;
  margin-top: 0;
  margin-bottom: 25px;
`;

const Type = styled.span`
  color: ${colors.text};
  font-size: 24px;
  text-transform: capitalize;
  margin-left: 5px;
`;

const Table = styled.table`
  margin: auto;
`;

const TH = styled.th`
  color: ${colors.label};
  font-size: 15px;
  font-weight: lighter;
  width: 90px;
  padding-bottom: 10px;
`;

const TD = styled.td`
  color: ${colors.text};
  font-size: 25px;
  width: 100px;
`;

const Pokedex = ({ data }) => {
  const { id, name, sprites, types, base_experience, height, weight } = data;
  return (
    <Container>
      <Name>{name}</Name>
      <Image src={sprites.front_default} alt="Pokemon image" />
      <TypeLabel>
        Type: <Type>{types[0].type.name}</Type>
      </TypeLabel>
      <Table>
        <tbody>
          <tr>
            <TD>{id}</TD>
            <TD>{base_experience}</TD>
          </tr>
          <tr>
            <TH>PokeID</TH>
            <TH>Base XP</TH>
          </tr>
          <tr>
            <TD>{height}</TD>
            <TD>{weight}</TD>
          </tr>
          <tr>
            <TH>Height</TH>
            <TH>Weight</TH>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Pokedex;
