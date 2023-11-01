import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  return (
    <div className='new-expense'>
      <ExpenseForm onSaveExpense={onAddExpense} />
    </div>
  );
};

export default NewExpense;
