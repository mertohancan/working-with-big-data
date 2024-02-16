import React, { useEffect, useState } from 'react';
import DataTable from '../../components/data-table';
import { SelectedBet, useBet } from '../../contexts/bet';
import { Bet } from '../../types/bet';
import BasketComponent from '../../components/basket';

const Home = () =>{
  const [bets, setBets] = useState<Bet[]>([]);
  const { state, dispatch } = useBet();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://nesine-case-study.onrender.com/bets");
        if (!response.ok) {
          throw new Error('Veri alınamadı.');
        }
        const data = await response.json();
        setBets(data);
      } catch (error) {
        console.error('Hata:', error);
      }
    };

    fetchData();
  }, []); 

  const handleSelectBet = (bet: SelectedBet) => {
    dispatch({ type: 'ADD_BET', bet: bet });
  }

  const handleRemoveBet = (id: string) => {
    dispatch({ type: "REMOVE_BET", id: id });
  }

  return (
    <div>
      <DataTable
        selectedData={state.selectedBets}
        onSelectData={handleSelectBet}
        onRemoveData={handleRemoveBet}
        data={bets} />
      <BasketComponent items={state.selectedBets} totalPrice={state.totalPrice} />
    </div>
  )
}

export default Home;