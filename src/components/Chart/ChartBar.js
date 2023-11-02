import React from 'react';

import './ChartBar.css';

const ChartBar = ({ label, currentValue, maxValue }) => {
  let barFillHeight = '0%';

  if (maxValue > 0) {
    const percentage = (currentValue / maxValue) * 100;
    barFillHeight = percentage + '%';
  }

  return (
    <div className='chart-bar'>
      <div className='chart-bar__inner'>
        <div
          className='chart-bar__fill'
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className='chart-bar__label'>{label}</div>
    </div>
  );
};

export default ChartBar;
