import React from 'react';
import Dropdown from '../../components/ExpandableDiv/DropDown';

const TransactionsPage = () => {
  // Contenu de la page des transactions
  return (
    <div>
      <h1>Transactions Page</h1>
      <div className='category-title'>
      <p>Date</p>
      <p>Description</p>
      <p>Amount</p>
      <p>Balance</p>
      <p></p>
      </div>
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
      <Dropdown />
    </div>
  );
};

export default TransactionsPage;
