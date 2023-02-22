import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Headroom from 'react-headroom';
import { addScrollableSelector, disablePageScroll } from 'scroll-lock';
import { FaGamepad } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai'
import Button from './Button';
import SearchBar from './SearchBar';
import Transition from './Transition';
import { Game } from '../types/Game.types';

interface Props {
  cartItems: Game[];
  setIsCartOpen: (isCartOpen: boolean) => void;
}

function Header(props: Props) {
  const { cartItems, setIsCartOpen } = props;
  const navigate = useNavigate();
  const navigateToHome = () => navigate('/');

  const openCart = () => {
    setIsCartOpen(true);
    addScrollableSelector('.items');
    disablePageScroll();
  };

  return (
    <Headroom upTolerance={1}>
      <Transition className="Header" direction="down" distance={20}>
        <Button className="Logo" handleClick={navigateToHome}>
          <FaGamepad /> GameShop
        </Button>

        <SearchBar />

        <Button className="Cart" handleClick={openCart}>
          <AiOutlineShoppingCart />
          Cart
          <div>{cartItems.length}</div>
        </Button>
      </Transition>
    </Headroom>
  );
}

export default memo(Header);
