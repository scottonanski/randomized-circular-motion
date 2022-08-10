const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particleArray = [];

class Particle {
    constructor(moveRadius, step, position, size) {
        this.moveRadius = moveRadius + 100;
        this.step = step;
        this.position = position;
        this.size = size;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(
            Math.sin(this.position) * this.moveRadius + canvas.width / 2,
            Math.cos(this.position) * this.moveRadius + canvas.height / 2,
            this.size,
            0,
            Math.PI * 2
        );
        ctx.closePath();
        ctx.fillStyle = "rgba(0, 255, 0, 0.2)";
        ctx.fill();
        ctx.strokeStyle = "rgba(0, 16, 0, .2)";
        ctx.stroke();
        ctx.lineWidth = 20;
    }
    update() {
        this.position += this.step;
        this.draw();
    }
}

function init() {
    particleArray = [];
    for (let i = 0; i < 1000; i++) {
        let moveRadius = Math.random() * canvas.width;
        let step = Math.random() * 0.005 + 0.0009;
        let position = Math.floor(Math.random() * Math.PI * 2);
        let size = Math.random() * 40;

        particleArray.push(new Particle(moveRadius, step, position, size));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(0, 0, 0, 0.0009)";
    ctx.fillRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update();
    }
}

init();
animate();

window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
});