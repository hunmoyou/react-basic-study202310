import React from 'react';

const ExpenseItem = () => {
  return (
    <div className='expense-item'>
      <div>2023년 10월 30일</div>
      <div className='expense-item__description'>
        <h2>냠냠치킨</h2>
        <div className='expense-item__price'>19000원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
