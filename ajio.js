const imgs = document.querySelectorAll('.container .images img');
const imgRow = document.querySelector('.container .images');
const prev = document.querySelector('.container-btn.prev');
const next = document.querySelector('.container-btn.next');
let idx = 0;



function showSlide() {
    imgRow.style.transform = `translateX(-${idx * 100}%)`;
}

next.onclick = () => {
    idx = (idx + 1) % imgs.length;
    showSlide();
};

prev.onclick = () => {
    idx = (idx - 1 + imgs.length) % imgs.length;
    showSlide();
};


setInterval(() => next.click(), 3000);



