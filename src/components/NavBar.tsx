import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { RiArrowLeftLine } from 'react-icons/ri';
import Transition from './Transition';
import Button from './Button';

interface Props {
  showStoreButton: boolean;
  title?: string;
}

function NavBar(props: Props) {
  const { showStoreButton, title } = props;
  const navigate = useNavigate();
  const navigateToStore = () => navigate('/games');

  return (
    <nav className="NavBar">
      {showStoreButton && (
        <Transition direction="left">
          <Button className="Store" handleClick={navigateToStore}>
            <RiArrowLeftLine />
          </Button>
        </Transition>
      )}
      {title && <motion.h2 layout>{title}</motion.h2>}
    </nav>
  );
}

export default NavBar;
