import React, { useState } from 'react';
import './css/button.css';
import metalogo from '../assets/images/metamask-icon.png';
import Web3 from 'web3';

const ConnectWallet = () => {
  const [accounts, setAccounts] = useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3Instance = new Web3(window.ethereum);
        setAccounts(accounts);
        console.log('Connected accounts:', accounts);
      } catch (err) {
        console.error('Error connecting to MetaMask:', err);
      }
    } else {
      alert('Please install MetaMask to connect your wallet.');
    }
  };

  return (
    <>
      {accounts && accounts.length > 0 ? (
        <div className='w-[190px] h-[35px] border-[1px] flex items-center space-x-2 border-slate-400 rounded-md pl-3 truncate'>
            <img src={metalogo} className="inline w-[22px] h-[22px]" alt="Logo" />
            <span className="font-mono text-slate-300">| {accounts[0].slice(0, 6)}...{accounts[0].slice(-4)}</span>
        </div>
      ) : (
        
        <button className='custom-btn btn-12' onClick={connectWallet}>
          <span className="inline-flex flex-row font-medium">
            <img src={metalogo} className="inline pr-2 pb-1 w-[30px] h-[25px]" alt="Logo" />
            MetaMask
          </span>
          <span>Connect Wallet</span>
        </button>
      )} 
    </>
  );
};

export default ConnectWallet;
