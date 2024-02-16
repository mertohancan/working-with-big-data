import React, { useCallback } from 'react';
import { FixedSizeList as List } from "react-window";

import { Bet } from '../../types/bet';
import { Cell, Column, Row } from './styled';

interface Props {
  data: Bet[]
}
const DataTable = ({ data }: Props) => {
  const cellRenderer = useCallback(({ bet }: { bet: Bet }) => {
    return (
      <Column key={bet.NID}>
        <Row>
          <Cell textAlign='left' width='1000px'>{bet.D} {bet.DAY} {bet.LN}</Cell>
          <Cell>Yorumlar</Cell>
          <Cell></Cell>
          <Cell>1</Cell>
          <Cell>x</Cell>
          <Cell>2</Cell>
          <Cell>Alt</Cell>
          <Cell>Üst</Cell>
          <Cell>H1</Cell>
          <Cell>1</Cell>
          <Cell>x</Cell>
          <Cell>2</Cell>
          <Cell>H2</Cell>
          <Cell>1-X</Cell>
          <Cell>1-2</Cell>
          <Cell>X-2</Cell>
          <Cell>Var</Cell>
          <Cell>Yok</Cell>
          <Cell>+99</Cell>
        </Row>

        <Row>
          <Cell textAlign='left' width='1000px'><b>{bet.C}</b> {bet.T} {bet.N}</Cell>
          <Cell>Yorumlar</Cell>
          <Cell>{"MBS"}</Cell>
          <Cell>{"6.71"}</Cell>
          <Cell>{bet.OCG[1].OC[1].O}</Cell>
          <Cell></Cell>
          <Cell>{"7.34"}</Cell>
          <Cell>{"1.51"}</Cell>
          <Cell></Cell>
          <Cell></Cell>
          <Cell></Cell>
          <Cell></Cell>
          <Cell></Cell>
          <Cell>1.79</Cell>
          <Cell>{bet.OCG[2].OC[4].O}</Cell>
          <Cell>1.35</Cell>
          <Cell></Cell>
          <Cell></Cell>
          <Cell>3</Cell>
        </Row>
      </Column>
    );
  }, []);

  return (
    <List
      innerElementType="ul"
      itemData={data}
      itemCount={data.length}
      itemSize={80}
      height={80 * data.length}
      width="100%"
    >
      {({ data, index }) => {
        const bet = data[index]
        return cellRenderer({ bet })
      }}
    </List>

  );
};

export default DataTable;