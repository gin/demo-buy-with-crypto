import './App.css';
import CoinbaseCommerceButton from 'react-coinbase-commerce';
import 'react-coinbase-commerce/dist/coinbase-commerce-button.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Demo</h1>
        <p>
          Click on the button below to see a panel to pay for the product that's listed in Coinbase Commerce.
          <br />
          (e.g. Buy a month of Hippo subscription)
        </p>
        <CoinbaseCommerceButton checkoutId={'98f30752-ddde-47a0-a398-c8727d726653'}/>
      </header>
    </div>
  );
}

export default App;
