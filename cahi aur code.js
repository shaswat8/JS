const randomcolor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i<=6; i++) {
        color += hex[Math.floor(Math.random() * 16)];

    }
    return color;
    
};
let intervalId;
const startChangingColor = function() {

     intervalIdl = setInterval(changeColor,1000)

    function changeBgColor() {
        document.body.style.background = randomClor();
    }



    
};
const stopChangingColor = function() {}

document.querySelector("#Start").addEventListener('click', startChangingColor)

document.querySelector("#Stop").addEventListener('click', stopChangingColor)