
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './components/Cart/Cart';
import Home from './components/HomePage/Home';
import ProductView from './components/ItemDetails/ProductView';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/cart" element={<Cart/>}></Route>
      <Route path="/product/:id" element={<ProductView/>}></Route>


      </Routes>

      
    </div>
  );
}

export default App;
