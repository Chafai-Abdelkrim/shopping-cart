import { useCallback, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { Header, Cart } from './components';
import { gameList } from './api';
import { Home, GameList, GameDetails, NotFound } from './pages';
import getPrice from './utils/getPrice';
import { Game } from './types/Game.types';
import './styles/App.css'

const loadGames = async (search = '') => {
    const response = await 
}

function App() {

}

export default App;