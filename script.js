
const items = document.querySelectorAll(".item");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");

let current = 0;

function updateCarousel(){

items.forEach(item=>{
item.style.opacity="0";
item.style.zIndex="0";
item.style.transform="translate(-50%, -50%) scale(0.7)";

const name = item.querySelector("h3");
if(name) name.style.opacity="0";
});

const center = items[current];
const left = items[(current - 1 + items.length) % items.length];
const right = items[(current + 1) % items.length];

center.style.opacity="1";
center.style.zIndex="3";
center.style.transform="translate(-50%, -50%) scale(1.2)";

center.querySelector("h3").style.opacity="1";

left.style.opacity="1";
left.style.zIndex="2";
left.style.transform="translate(calc(-50% - 320px), -50%) scale(0.8)";

right.style.opacity="1";
right.style.zIndex="2";
right.style.transform="translate(calc(-50% + 320px), -50%) scale(0.8)";
}

next.onclick = ()=>{
current++;
if(current >= items.length) current = 0;
updateCarousel();
};

prev.onclick = ()=>{
current--;
if(current < 0) current = items.length - 1;
updateCarousel();
};

updateCarousel();