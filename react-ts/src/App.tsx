// import './assets/App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Navbar } from './components/navbar';
// import { Gallery } from './components/gallery';
// import { useCheckout } from './components/trnsLogic';
// import TxStatus from './components/txStatus';
// import Success from './pages/success'; 

// function HomePage() {
//   const { handleBuy, isPending, isConfirming, isSuccess, error, txHash } = useCheckout();

//   return (
//     <>
//       <Navbar />
//       <main className="app-main">
//         <Gallery onBuy={handleBuy} />
//         <TxStatus 
//           isPending={isPending} 
//           isConfirming={isConfirming} 
//           isSuccess={isSuccess} 
//           error={error} 
//           txHash={txHash} 
//         />
//       </main>
//     </>
//   );
// }

// function App() {
//   return (
//     <BrowserRouter> 
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/success" element={<Success />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
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
        <div className="hero">
          <h1>Bring your practice to the next level</h1>
          <p>
            Buy digital yoga packs with Ethereum and unlock exclusive content to enhance your practice. Experience the future of wellness with our secure and seamless crypto checkout.
          </p>
        </div>
        <Gallery onBuy={handleBuy} isPending={isPending} />
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