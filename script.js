score = 0;
cross = true;
audio = new Audio('bgAudio.mp3');
bheem = new Audio('indu.mp3');
btn = document.querySelector('#btn');

audio.volume = 0.1;

document.onkeydown = function (e) {
    if (e.code == 'ArrowUp') {
        bheem.play();
        girl = document.querySelector('.girl');
        girl.classList.add('jump');
        setTimeout(() => {
            girl.classList.remove('jump');
        }, 700);
    }
    else if (e.code == 'ArrowRight') {
        girl = document.querySelector('.girl');
        girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
        girl.style.left = girlX + 50 + "px";
    }
    else if (e.code == 'ArrowLeft') {
        girl = document.querySelector('.girl');
        girlX = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
        girl.style.left = (girlX - 50) + "px";
    }

}

setInterval(() => {
    girl = document.querySelector('.girl');
    don = document.querySelector('.don');
    gameOver = document.querySelector('.gameOver');
    scoreDisplay = document.querySelector('.score');

    gx = parseInt(window.getComputedStyle(girl, null).getPropertyValue('left'));
    gy = parseInt(window.getComputedStyle(girl, null).getPropertyValue('bottom'));

    dx = parseInt(window.getComputedStyle(don, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(don, null).getPropertyValue('bottom'));

    offsetX = Math.abs(gx - dx);
    offsetY = Math.abs(gy - dy);
    if (offsetX < 40 && offsetY < 50) {
        audio.play();
        gameOver.style.visibility = 'visible';
        btn.style.display = 'inline';
        don.classList.remove('donAnimation');

    }
    else if (offsetX < 100 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            donTime = parseFloat(window.getComputedStyle(don, null).getPropertyValue('animation-duration'));
            if (donTime >= 3) {
                NewTime = donTime - 0.1;
                don.style.animationDuration = NewTime + 's';
                console.log(NewTime);
            }

        }, 500);


    }

}, 10);

function updateScore(score) {
    scoreDisplay.innerHTML = "Your Score: " + score;
}

btn.addEventListener('click', () => {
    location.reload();

});

