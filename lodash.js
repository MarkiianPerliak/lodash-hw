const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

const changeImageSize = _.debounce(() => {
    const value = sliderInput.value;
    const scale = 1 + value / 100;
    sliderImage.style.transform = `scale(${scale})`;
});

sliderInput.addEventListener('input', (event) => {
    changeImageSize();
});

const box = document.getElementById('box');
const delay = 100;

const moveBox = _.debounce((event) => {
  box.style.left = event.clientX + 'px';
  box.style.top = event.clientY + 'px';
}, delay);

document.addEventListener('mousemove', (event) => {
    moveBox(event);
});