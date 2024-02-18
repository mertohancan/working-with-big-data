import { useEffect, useState } from 'react';
import { API_URL } from '../constants';
import { Bet } from '../types/bet';

export const useGetBets = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [bets, setBets] = useState<Bet[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Veri alınamadı.');
        }
        const data = await response.json();
        setBets(data);
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.error('Hata:', error);
      }
    }
      
    fetchData();
  }, []); 

  return  { bets, isLoading }
}