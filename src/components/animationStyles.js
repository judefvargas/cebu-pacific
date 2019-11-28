import Radium from 'radium';
import { fadeInDown, pulse } from 'react-animations';

export const styles = {
    fadeInDown: {
      animation: 'x 0.8s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    pulse: {
        animation: 'pulse 2s infinite',
        animationName: Radium.keyframes(pulse, 'pulse')
    }
}