import React from 'react';
import DataTable from '@components/data-table';
import Loader from '@components/loader';
import BasketComponent from '@components/basket';

import { SelectedBet, useBet } from '@contexts/bet';
import { useGetBets } from '@hooks/useGetBets';


const Home = () =>{
  const { bets, isLoading } = useGetBets();
  const { state, dispatch } = useBet();

  const handleSelectBet = (bet: SelectedBet) => {
    dispatch({ type: 'ADD_BET', bet: bet });
  }

  const handleRemoveBet = (id: string) => {
    dispatch({ type: "REMOVE_BET", id: id });
  }

  return (
    <div>
      {isLoading ?
       <Loader /> 
         :
          <>
        <DataTable
          selectedData={state.selectedBets}
          onSelectData={handleSelectBet}
          onRemoveData={handleRemoveBet}
          data={bets} />
        <BasketComponent items={state.selectedBets} totalPrice={state.totalPrice} />
      </>}

    </div>
  )
}

export default Home;