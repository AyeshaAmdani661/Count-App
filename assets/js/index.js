const counter = document.querySelector('#counter');
const increaseBtn = document.querySelector('.increase');
const decreaseBtn = document.querySelector('.decrease');
const resetBtn = document.querySelector('.reset');
let count = 0;

increaseBtn.addEventListener("click", () => {
    count++;
    counter.innerHTML = count;
    checkStyle();
});

decreaseBtn.addEventListener("click", () => {
    count--;
    counter.innerHTML = count;
    checkStyle();
});

resetBtn.addEventListener("click", () => {
    count = 0;
    counter.innerHTML = count;
    checkStyle();
});

checkStyle = () => {
    if (counter.innerHTML > 0) {
        counter.style.color = 'green';
    } else if (counter.innerHTML < 0) {
        counter.style.color = 'red';
    } else {
        counter.style.color = 'white';
    }
}