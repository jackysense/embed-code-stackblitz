import React, { useState } from 'react';
import { ethers } from 'ethers';

const GenerateWallet = () => {
  const [mnemonic, setMnemonic] = useState('');
  const [address, setAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');

  const handleGenerateWallet = () => {
    // Generate a new random mnemonic
    const randomMnemonic = ethers.Wallet.createRandom().mnemonic;
    setMnemonic(randomMnemonic.phrase);

    // Create a new wallet from the mnemonic
    debugger;
    const wallet = ethers.Wallet.fromPhrase(randomMnemonic.phrase);
    setAddress(wallet.address);
    setPrivateKey(wallet.privateKey);
  };

  return (
    <div>
      <button onClick={handleGenerateWallet}>Generate Wallet</button>
      {mnemonic && (
        <div>
          <p>Mnemonic: {mnemonic}</p>
          <p>Address: {address}</p>
          <p>Private key: {privateKey}</p>
        </div>
      )}
    </div>
  );
};

export default GenerateWallet;
