import logo from './logo.svg';
import './App.css';

import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo. Click on the button to see panel to pay for the product set in Coinbase Commerce.
        </p>
        <CoinbaseCommerceButton checkoutId={'98f30752-ddde-47a0-a398-c8727d726653'}/>
      </header>
    </div>
  );
}

export default App;
