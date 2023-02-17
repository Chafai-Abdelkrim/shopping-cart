import { FillingBottle } from 'react-cssfx-loading';
import Transition from './Transition';

function Loading() {
  return (
    <Transition className="Loading">
      <FillingBottle height="100px" width="100px" color="#9922ff" />
    </Transition>
  );
}

export default Loading;
