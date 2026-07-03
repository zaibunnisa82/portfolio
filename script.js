console.log("JavaScript loaded!");

const images = [
    "images/profile.jpeg",
    "images/gold.jpeg",
    "images/conv.png",
    "images/Conf.jpeg",
    "images/Conf3.png",
    "images/UOL.png",
    "images/MS_final defense.jpeg"
];

let current = 0;

const img = document.getElementById("profileImage");

setInterval(() => {
    img.style.opacity = 0;

    setTimeout(() => {
        current = (current + 1) % images.length;
        img.src = images[current];
        img.style.opacity = 1;
    }, 800);

}, 4000);

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {
    const target = Number(counter.getAttribute("data-target"));
    let count = 0;
    const speed = target / 60;

    const updateCounter = () => {
        count += speed;

        if (count < target) {
            counter.innerText = Math.ceil(count);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
});
