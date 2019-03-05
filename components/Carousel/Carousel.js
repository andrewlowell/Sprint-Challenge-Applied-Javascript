console.log(document.querySelector('.left-button'));

class Carousel {
    constructor(careBear) {
        this.careBear = careBear;
        this.left = document.querySelector('.left-button');
        console.log(this.left);
        this.right = document.querySelector('.right-button');
        this.images = document.querySelectorAll('.carousel img');
        Array.from(this.images).forEach(e => {
            if (e.dataset.index === '0') {
                e.style.display = '';
            }
            else {
                e.style.display = 'none';
            }
        });
        this.left.addEventListener('click', e => {
            let currentIndex;
            let imageQuantity = this.images.length;
            Array.from(this.images).forEach(e => {
                if (e.style.display === '') {
                    currentIndex = e.dataset.index;
                }
            });
            Array.from(this.images).forEach(e => {
                if (e.dataset.index === this.newIndex('left', currentIndex, imageQuantity)) {
                    e.style.opacity = '0';
                    TweenLite.to(e, 1, {opacity:"1"});
                    e.style.display = '';
                }
                else {
                    e.style.display = 'none';
                }
            });
        });
        this.right.addEventListener('click', e => {
            let currentIndex;
            let imageQuantity = this.images.length;
            Array.from(this.images).forEach(e => {
                if (e.style.display === '') {
                    currentIndex = e.dataset.index;
                }
            });
            Array.from(this.images).forEach(e => {
                if (e.dataset.index === this.newIndex('right', currentIndex, imageQuantity)) {
                    e.style.opacity = '0';
                    TweenLite.to(e, 1, {opacity:"1"});
                    e.style.display = '';
                }
                else {
                    e.style.display = 'none';
                }
            });
        });
    }
    newIndex(direction, currentIndex, arrLength) {
        switch(direction) {
            case 'left':
                switch(currentIndex) {
                    case '0':
                        return `${arrLength - 1}`;
                    default:
                        return `${parseInt(currentIndex) - 1}`;
                }
            case 'right':
                switch(currentIndex) {
                    case `${arrLength - 1}`:
                        return '0';
                        break;
                    default:
                        return `${parseInt(currentIndex) + 1}`;
                }
        }
    }
}

let carousel = document.querySelector('.carousel');

const twirlyWhirly = new Carousel(carousel);

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

console.log(twirlyWhirly.newIndex('right', '0', 5));
console.log(twirlyWhirly.newIndex('right', '4', 5));
console.log(twirlyWhirly.newIndex('left', '0', 5));
console.log(twirlyWhirly.newIndex('left', '4', 5));