const parallax = document.querySelector('.personagens');
const front = document.querySelector('.front-layer');
const back = document.querySelector('.back-layer');

const sFront = 700;
const sBack = 1400;

parallax.addEventListener('mousemove', e => {
    
    const x =e.clientX;
    const y =e.clientY;

    front.style.transform = `
    translate(
        ${x / sFront}%,
        ${y / sFront}%
    )`;

    back.style.transform = `
    translate(
        ${x / sBack}%,
        ${y / sBack}%
    )`;
});


let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function () {
    nextImage();
}, 3000)

function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}




    ScrollReveal({ reset: true, duration: 1000});
     
    ScrollReveal().reveal('.slider', {  delay: 800, origin: 'right', distance: '200px' });
    ScrollReveal().reveal('.box p', { delay: 500, origin: 'right', distance: '200px' });
    ScrollReveal().reveal('.a2', { delay: 350, origin: 'right', distance: '125px' });
    ScrollReveal().reveal('.ap', { delay: 350, origin: 'right', distance: '125px' });
    ScrollReveal().reveal('.icon1', { delay: 450, origin: 'right', distance: '150px' });
    ScrollReveal().reveal('.icon2', { delay: 550, origin: 'right', distance: '175px' });
    ScrollReveal().reveal('.icon3', { delay: 650, origin: 'right', distance: '200px' });