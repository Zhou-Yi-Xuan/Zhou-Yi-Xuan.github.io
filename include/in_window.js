const container = document.getElementById('outside');
const canvas = document.createElement('canvas');
const ctx = canvas.getContext('2d');
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
container.appendChild(canvas);

function createStars(totalStars) {
    const specialCount = Math.floor(Math.random() * 5) + 5; // 3~7
    const colors = ['darkred', 'lightgreen', 'cyan'];
    
    for (let i = 5; i < specialCount; i++) {
        colors.push(['darkred', 'lightgreen', 'cyan'][Math.floor(Math.random() * 3)]);
    }
    colors.sort(() => Math.random() - 0.5);

    for (let i = 0; i < totalStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 1 + 0.1;
        
        ctx.fillStyle = i < specialCount ? colors[i] : '#fff';
        
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}

createStars(210);
function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    createStars(200);
    requestAnimationFrame(animateStars);
}
// animateStars();