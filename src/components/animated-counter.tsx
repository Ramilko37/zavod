import React from 'react';
import { useSpring, animated } from 'react-spring';
import Plus from 'assets/icons/plus-icon';
import Minus from 'assets/icons/minus-icon';
import Trash from 'assets/icons/trash';
import IconButton from './icon-button';
import {
  AnimatedCounterBaseWrapper,
  AnimatedCounterBase,
  AnimatedCounterValue,
} from './utils/theme';

type AnimatedCounterProps = {
  className?: string;
  widthClass?: string;
  value: number;
  boxCapacity: number;
  onDecrement: (e: any) => void;
  onIncrement: (e: any) => void;
};

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  className = '',
  widthClass = '',
  onDecrement,
  onIncrement,
  value,
  boxCapacity
}) => {
  const width = useSpring({
    width: value ? 110 : 45,
    height: '100%',
    // boxShadow: value ? '0 5px 10px rgba(0,0,0,0.16)' : 'none',
  });

  const classNames = AnimatedCounterBaseWrapper + ' ' + widthClass + ' ' + className;

  return (
    <div className={classNames}>
      <animated.div style={width}>
        <div className={AnimatedCounterBase}>
          <IconButton
            onClick={onDecrement}
            className="icon-button"
          >
            {value > 1 ? <Minus /> : <Trash />}
          </IconButton>
          <span className={AnimatedCounterValue}>{value ? boxCapacity*value + " шт. / " + value + "кор." : '0'}</span>
          <IconButton
            onClick={onIncrement}
            className="icon-button"
          >
            <Plus />
          </IconButton>
        </div>
      </animated.div>
    </div>
  );
};

export default AnimatedCounter;
