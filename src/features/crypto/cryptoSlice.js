import { createSlice } from '@reduxjs/toolkit';
import mockData from '../../data/mockData';

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: {
    coins: mockData,
  },
  reducers: {
    simulatePriceUpdate: (state) => {
      state.coins = state.coins.map((coin) => {
        const rand = () => ((Math.random() - 0.5) * 2).toFixed(2);
        return {
          ...coin,
          price: (coin.price * (1 + rand() / 100)).toFixed(2),
          change1h: parseFloat(rand()),
          change24h: parseFloat(rand()),
          change7d: parseFloat(rand()),
        };
      });
    },
  },
});

export const { simulatePriceUpdate } = cryptoSlice.actions;
export default cryptoSlice.reducer;
