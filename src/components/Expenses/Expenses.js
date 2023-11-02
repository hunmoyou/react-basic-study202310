import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import ExpenseChart from './ExpenseChart';

const Expenses = ({ items }) => {
  console.log('items:', items);
  // 선택된 연도 상태값 관리
  const [filteredYear, setFilteredYear] = useState(
    new Date().getFullYear().toString()
  );

  // 자식 컴포넌트 ExpenseFilter에 있는 선택 연도를 끌어올리는 함수
  const filterChangeHandler = (selectedYear) => {
    //console.log('Expenses: ', selectedYear);
    setFilteredYear(selectedYear);
  };

  // // ExpenseItem을 동적 렌더링하기
  // const iterateExpenseItem = () => {
  //   // 자바스크립트 배열의 메서드: map(배열 요소에 적용할 함수)
  //   // 콜백 함수의 매개값으로 배열의 요소가 하나씩 전달됨.
  //   // 콜백 함수는 배열 요소의 개수만큼 반복됨.
  //   // map의 리턴값: 함수가 적용된 각 요소가 담긴 새로운 배열이 리턴됨.
  //   return items.map((item) => (
  //     <ExpenseItem
  //       key={item.id}
  //       title={item.title}
  //       price={item.price}
  //       date={item.date}
  //     />
  //   ));
  // };

  const filteredItems = items.filter(
    (item) => item.date.getFullYear().toString() === filteredYear
  );

  // 조건부 렌더링을 위한 변수
  let expenseContent = <p>아직 등록된 지출이 없습니다.</p>;

  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map((item) => (
      <ExpenseItem
        key={item.id}
        title={item.title}
        price={item.price}
        date={item.date}
      />
    ));
  }

  return (
    <Card className='expenses'>
      <ExpensesFilter onChangeFilter={filterChangeHandler} />
      <ExpenseChart expenses={filteredItems} />
      {expenseContent}
    </Card>
  );
};

export default Expenses;
