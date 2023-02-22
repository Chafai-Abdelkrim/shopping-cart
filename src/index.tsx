import ReactDOM from 'react-dom/client';
import { Routes, Route, HashRouter } from 'react-router-dom';
import App from './App';
import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <HashRouter>
    <Routes>
      <Route path='/*' element={<App />} />
    </Routes>
  </HashRouter>
);
