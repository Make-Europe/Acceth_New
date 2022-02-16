import React from 'react';
import ReactDOM from 'react-dom';
import "./globals.css"
import "./styleguide.css"
import App from './App';
import reportWebVitals from './reportWebVitals';

//import { Web3ReactProvider } from '@web3-react/core'
import { ContractKitProvider } from "@celo-tools/use-contractkit";
import Web3 from 'web3'

function getLibrary(provider) {
  return new Web3(provider)
}

ReactDOM.render(
  //<React.StrictMode>
    <ContractKitProvider
      dapp={{
        name: "ACC.ETH",
        description: "Your instant web3 market.",
        url: "https://acceth.xyz",
      }}
    >
      <App />
    </ContractKitProvider>,
      
  //</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
