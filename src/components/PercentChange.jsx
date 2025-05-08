const PercentChange = ({ value }) => {
    const color = value > 0 ? 'text-green-500' : value < 0 ? 'text-red-500' : 'text-gray-500';
    const arrow = value > 0 ? '▲' : value < 0 ? '▼' : '•';
    return <span className={`${color} font-semibold`}>{arrow} {Math.abs(value)}%</span>;
  };
  
  export default PercentChange;
  