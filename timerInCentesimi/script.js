let timer = document.getElementById("timerId");

const avvia = document.getElementById("avvia");
const pausa = document.getElementById("pausa");
const azzera = document.getElementById("azzera");


console.log(pausa)
let clock;

avvia.addEventListener('click', function() {

    console.log('inizia');
    clock = setInterval(function() {
        timer.innerHTML = (parseFloat(timer.innerHTML) + 1);
    }, 10);
});

pausa.addEventListener('click', function() {
    clearInterval(clock);
});


azzera.addEventListener('click', function() {
    timer.innerHTML = parseInt(0);
});