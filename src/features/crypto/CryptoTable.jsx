import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { simulatePriceUpdate } from './cryptoSlice';
import PercentChange from '../../components/PercentChange';

const CryptoTable = () => {
    const dispatch = useDispatch();
    const coins = useSelector((state) => state.crypto.coins);

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch(simulatePriceUpdate());
        }, 2000);
        return () => clearInterval(interval);
    }, [dispatch]);

    return (
        <div className="overflow-x-auto p-4">
            <table className="w-full table-auto border-collapse rounded-lg overflow-hidden text-sm text-left shadow">
                <thead className="bg-gray-200 dark:bg-gray-700">
                    <tr>
                        <th className="px-4 py-2">#</th>
                        <th className="px-4 py-2">Name</th>
                        <th className="px-4 py-2">Price</th>
                        <th className="px-4 py-2">1h %</th>
                        <th className="px-4 py-2">24h %</th>
                        <th className="px-4 py-2">7d %</th>
                        <th className="px-4 py-2">Market Cap</th>
                        <th className="px-4 py-2">Volume</th>
                        <th className="px-4 py-2">Supply</th>
                        <th className="px-4 py-2">7d Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map((coin, index) => (
                        <tr key={coin.id} className="hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="px-4 py-2">{index + 1}</td>
                            <td className="px-4 py-2 flex items-center gap-2">
                                <img src={coin.logo} alt={coin.symbol} className="w-5 h-5" />
                                <span>{coin.name} <span className="text-gray-500 text-xs">{coin.symbol}</span></span>
                            </td>
                            <td className="px-4 py-2">${coin.price}</td>
                            <td className="px-4 py-2"><PercentChange value={coin.change1h} /></td>
                            <td className="px-4 py-2"><PercentChange value={coin.change24h} /></td>
                            <td className="px-4 py-2"><PercentChange value={coin.change7d} /></td>
                            <td className="px-4 py-2">${coin.marketCap}</td>
                            <td className="px-4 py-2">${coin.volume}</td>
                            <td className="px-4 py-2">{coin.supply}</td>
                            <td className="px-4 py-2">
                                <img src={coin.chart} alt="7d chart" className="h-10" />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CryptoTable;
