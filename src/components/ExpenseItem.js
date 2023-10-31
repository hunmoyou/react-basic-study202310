import React from 'react';
import './ExpenseItem.css';

const ExpenseItem = ({ title, price: propsPrice, date }) => {
  // console.log(props);

  // const price = 99999;
  // const expenseDate = date;
  // const expenseTitle = title;
  // const expensePrice = propsPrice;

  // 1자리 숫자를 2자리수로 변환하는 함수
  const make2digit = (text) => {
    return text.toString().padStart(2, '0');
  };

  // 날짜 포맷팅 변환 함수 정의
  const makeFormattedDate = () => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return `${year}년 ${make2digit(month)}월 ${make2digit(day)}일`;
  };

  // 숫자를 원화 표기법으로 바꾸기
  const formattedPrice = new Intl.NumberFormat('ko-KR').format(propsPrice);
  return (
    <div className='expense-item'>
      <div>{makeFormattedDate()}</div>
      <div className='expense-itemdescription'>
        <h2>{title}</h2>
        <div className='expense-itemprice'>{formattedPrice}원</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
