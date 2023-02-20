import { gameDetails } from '../../api';
import { Game } from '../../types/Game.types';

interface Props {
  cartItems: Game[];
  addToCart: (game: Game) => void;
}

function GameDetails({ cartItems, addToCart }: Props) {}

export default GameDetails;
