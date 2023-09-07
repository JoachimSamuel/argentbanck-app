import React from 'react';
import Header from './Header';
import AccountSection from '../../components/AccountSection';

const UserPage = () => {
  return (
    <main className='userPage-contenair' >
        <Header />
        <AccountSection
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            description="Available Balance"
        />
        <AccountSection
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            description="Available Balance"
        />
        <AccountSection
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            description="Current Balance"
        />
    </main>
  );
};

export default UserPage;
