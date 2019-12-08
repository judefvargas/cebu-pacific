import Radium from 'radium';
import { fadeInDown, pulse, bounceIn, fadeOut, fadeIn } from 'react-animations';

export const styles = {
    fadeInDown: {
      animation: 'x 0.8s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    pulse: {
        animation: 'pulse 2s infinite',
        animationName: Radium.keyframes(pulse, 'pulse')
    },
    bounceIn: {
      animation: 'x 1s infinite',
        animationName: Radium.keyframes(bounceIn, 'bounceIn')
    },
    fadeOut: {
      animation: 'x 1s',
        animationName: Radium.keyframes(fadeOut, 'fadeOut')
    },
    fadeIn: {
      animation: 'x 0.5s',
        animationName: Radium.keyframes(fadeIn, 'fadeIn')
    }
}