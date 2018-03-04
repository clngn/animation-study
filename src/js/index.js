import 'web-animations-js/web-animations-next.min.js'
import '../css/style.css';

let state = {};

const createAnimation = (start, end, duration, callback) => {
  state.elements.area.style.background = '#fff';
  state.elements.animation.style.opacity = 1;
  const animation = state.elements.animation.animate([
    {
      width: `${start.width}px`,
      height: `${start.width}px`,
      top: `${start.top}px`,
      left: `${start.left}px`,
    },
    {
      width: `${end.width}px`,
      height: `${end.width}px`,
      top: `${end.top}px`,
      left: `${end.left}px`,
    }
  ], duration);

  animation.onfinish = () => {
    state.elements.animation.style = {
      width: `${end.width}px`,
      height: `${end.width}px`,
      top: `${end.top}px`,
      left: `${end.top}px`,
      opacity: 0,
    };

    if (callback) callback();
  };
};

document.addEventListener('DOMContentLoaded', event => {
  state = {
    ...state,
    elements: {
      area: document.querySelector('#main'),
      button: document.querySelector('.checkButton'),
      animation: document.querySelector('.animation'),
    },
    buttonWidth: 20,
    areaWidth: 500,
    areaHeight: 300,
    defaultTop: 0,
    defaultLeft: 0,
  };

  const areaDiagonal = Math.sqrt(Math.pow(state.areaWidth, 2) + Math.pow(state.areaHeight, 2));
  const start = {
    width: state.buttonWidth,
    top: state.defaultTop,
    left: state.defaultLeft,
  };
  const end = {
    width: 2 * areaDiagonal,
    top: -areaDiagonal,
    left: -areaDiagonal,
  };
  const duration = 400;

  state.elements.button.addEventListener('change', el => {
    if (el.target.checked) {
      createAnimation(start, end, duration, () => {
        state.elements.area.style.background = '#53b300';
      });
    } else {
      createAnimation(end, start, duration);
    }
  });
});
