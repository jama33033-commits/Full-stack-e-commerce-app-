import { HomePage } from './Pages/homepage';
import { CheckoutPage } from './Pages/checkoutPage';
import { Routes, Route } from 'react-router';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
    </Routes>
  );
}

export default App;
