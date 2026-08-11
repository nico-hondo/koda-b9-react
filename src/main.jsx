import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import World from './pages/World.jsx';
// import Home from './pages/Home.jsx';
import OperationArith from './pages/OperationArith.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <World />
    <Home /> */}
    <OperationArith/>
  </StrictMode>,
)
