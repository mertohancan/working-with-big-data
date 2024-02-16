import React, { useCallback } from 'react';
import { FixedSizeList as List } from "react-window";

import { Bet } from '../../types/bet';
import { Cell, Column, Row } from './styled';
import { BET_VALUE, CELL_SIZE } from '../../constants';
import { SelectedBet } from '../../contexts/bet';

interface Props {
  data: Bet[]
  onSelectData: (bet: SelectedBet) => void; 
  onRemoveData: (id: string) => void; 
  selectedData: SelectedBet[]
}

const formatSelectedData = (bet: Bet): SelectedBet =>({
  id: bet.NID,
  code: bet.C,
  price: BET_VALUE,
  match: bet.N,
  rate: bet.OCG[1].OC[1].O
})

const DataTable = ({ data, selectedData, onSelectData, onRemoveData }: Props) => {

  const renderRow = useCallback(
    ({ bet, style, isSelected }: {bet: Bet, style: React.CSSProperties, isSelected: boolean}) => {
      const handleSelectData = (bet: Bet) => {
        if(isSelected) {
          onRemoveData(bet.NID)
        } 
        else{
          onSelectData(formatSelectedData(bet))
        }
      }
      return (
        <Column style={style} key={bet.NID}>
          <Row>
            <Cell textAlign='left' width='500px'>{`${bet.D}  ${bet.DAY} ${bet.LN}`}</Cell>
            <Cell width='140px'>Yorumlar</Cell>
            <Cell></Cell>
            <Cell>1</Cell>
            <Cell width='400px'>x</Cell>
            <Cell>2</Cell>
          </Row>
       
          <Row>
            <Cell textAlign='left' width='500px'><b style={{ marginRight: 3 }}>{bet.C}</b> {' '}{bet.T} {bet.N}</Cell>
            <Cell width='140px'>Yorumlar</Cell>
            <Cell>{bet.OCG[1].MBS}</Cell>
            <Cell>{"6.71"}</Cell>
            <Cell width='400px' isSelected={isSelected} onClick={()=>handleSelectData(bet)}>{bet.OCG[1].OC[1].O} (SEÇİLEBİLİR)</Cell>
            <Cell></Cell>
          </Row>
        </Column>
      );
    }, []);

  return (
    <List
      itemData={data}
      itemCount={data.length}
      itemSize={CELL_SIZE}
      height={1200}
      width="100%"
    >
      {({ data, index, style }) => {
        const bet = data[index] as Bet;
        const isSelected = selectedData.some((d) => d.id === bet.NID)
        return renderRow({ bet, style, isSelected })
      }}
    </List>

  );
};

export default DataTable;
