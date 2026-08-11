import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import World from './pages/World.jsx';
// import Home from './pages/Home.jsx';
import OperationArith from './pages/OperationArith.jsx';
import DataProduct from './pages/DataProduct.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <OperationArith/>
    <DataProduct/>
  </StrictMode>,
)
