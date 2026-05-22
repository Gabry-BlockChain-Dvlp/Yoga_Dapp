import './assets/App.css';
import { Navbar } from './components/navbar';
import { Gallery } from "./components/gallery";
import { useCheckout } from './components/trnsLogic';
import TxStatus from './components/txStatus';


function App() {
  const { handleBuy, isPending, isConfirming, isSuccess, error, txHash } = useCheckout();

  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Gallery onBuy={handleBuy} />
        <TxStatus isPending={isPending} isConfirming={isConfirming} isSuccess={isSuccess} error={error} txHash={txHash} />
      </main>
    </div>
  );
}

export default App;
