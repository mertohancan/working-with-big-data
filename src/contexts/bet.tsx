/* eslint-disable no-case-declarations */
import React, { createContext, useContext, useReducer, Dispatch } from 'react';

export interface SelectedBet {
  id: string;
  code: string;
  match: string;
  rate: string;
  price: number;
}

interface State {
  selectedBets: SelectedBet[];
  totalPrice: number;
}

export type BetActions =
  | { type: 'ADD_BET'; bet: SelectedBet }
  | { type: 'REMOVE_BET'; id: string };

const BetContext = createContext<{ state: State; dispatch: Dispatch<BetActions> } | undefined>(undefined);

function betReducer(state: State, action: BetActions): State {
  switch (action.type) {
  case 'ADD_BET':
    const newBetTotalPrice = state.totalPrice + (parseFloat(action.bet.rate) * action.bet.price);
    return {
      ...state,
      selectedBets: [...state.selectedBets, action.bet],
      totalPrice: newBetTotalPrice,
    };
  case 'REMOVE_BET':
    const updatedBets = state.selectedBets.filter(bet => bet.id !== action.id);
    const removedBet = state.selectedBets.find(bet => bet.id === action.id);
    const removedBetPrice = removedBet ? parseFloat(removedBet.rate) * removedBet.price : 0;
    return {
      ...state,
      selectedBets: updatedBets,
      totalPrice: state.totalPrice - removedBetPrice,
    };
  default:
    return state;
  }
}
export const BetProvider = ({ children }: { children: any}) => {
  const [state, dispatch] = useReducer(betReducer, { selectedBets: [], totalPrice: 0 });

  return <BetContext.Provider value={{ state, dispatch }}>{children}</BetContext.Provider>;
};

export const useBet = () => {
  const context = useContext(BetContext);
  if (!context) {
    throw new Error('useBet must be used within a BetProvider');
  }
  return context;
};
