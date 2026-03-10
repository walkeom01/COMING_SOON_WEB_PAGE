const launchDate = new Date().getTime() + (10 * 24 * 60 * 60 * 1000);

const timer = document.querySelectorAll(".launch-time div p");

const countdown = setInterval(() => {

    const now = new Date().getTime();
    const distance = launchDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timer[0].innerHTML = days;
    timer[1].innerHTML = hours;
    timer[2].innerHTML = minutes;
    timer[3].innerHTML = seconds;

    if (distance < 0) {
        clearInterval(countdown);
        document.querySelector(".launch-time").innerHTML = "Website Launched!";
    }

}, 1000);
