import React, { useEffect, useState } from 'react';

import { Bet } from './types/bet';
import DataTable from './components/data-table';

function App() {
  const [bets, setBets] = useState<Bet[]>([]);

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
  }, []); // 
  
  return (    
    <div>
      <DataTable data={bets} />
    </div>
  );
}

export default App;