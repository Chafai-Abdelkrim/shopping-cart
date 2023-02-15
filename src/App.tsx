import { useCallback, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, Cart } from './components';
import { gameList } from './api';
import { Home, GameList, GameDetails, NotFound } from './pages';
import getPrice from './utils/getPrice';
import { Game } from './types/Game.types';
import './styles/App.css';

const loadGames = async (search = '') => {
  const response = await gameList({ page_size: 50, search });

  let { results } = response;
  results = results.filter((game) => game.rating_count > (search ? 50 : 10));
  results.forEach((game) => (game.price = getPrice(game)));

  return results;
};

function App() {
  const [cartItems, setCartItems] = useState<Game[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const addToCart = useCallback(
    (game: Game) => {
      setCartItems([...cartItems, game]);
    },
    [cartItems]
  );

  const removeFromCart = useCallback(
    (ids: number[]) => {
      setCartItems(cartItems.filter((item) => !ids.includes(item.id)));
    },
    [cartItems]
  );

  return (
      <div className='App'>
          <Header cartItems={cartItems} setIsCartOpen={setIsCartOpen} />
      </div>
  )
}

export default App;
