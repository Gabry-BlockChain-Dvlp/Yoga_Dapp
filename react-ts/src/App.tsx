import './assets/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import { Gallery } from './components/gallery';
import { useCheckout } from './components/trnsLogic';
import TxStatus from './components/txStatus';
import Success from './pages/success'; 

function HomePage() {
  const { handleBuy, isPending, isConfirming, isSuccess, error, txHash } = useCheckout();

  return (
    <>
      <Navbar />
      <main className="app-main">
        <Gallery onBuy={handleBuy} />
        <TxStatus 
          isPending={isPending} 
          isConfirming={isConfirming} 
          isSuccess={isSuccess} 
          error={error} 
          txHash={txHash} 
        />
      </main>
    </>
  );
}

function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;