setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minHand = document.querySelector('[data-min-hand]');
const secHand = document.querySelector('[data-sec-hand]');

function setClock() {
    currentDate = new Date()
    const secRatio = currentDate.getSeconds() / 60
    const minRatio = (secRatio + currentDate.getMinutes()) / 60
    const hourRatio = (minRatio + currentDate.getHours()) / 12
    setRotation(secHand, secRatio)
    setRotation(minHand, minRatio)
    setRotation(hourHand, hourRatio)
   // console.log(secRatio, minRatio, hourRatio)
}



function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setClock();

const date = document.querySelector('#date')

function setDate() {
    currentDate = new Date()
    date.innerText = "  Today's Date: " + currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear()
}

setDate();
setInterval(setDate, 1000)
