document.addEventListener('click', (e) => {

    const rawr = document.createElement('div');
    rawr.textContent = 'rawr!';
    rawr.className = 'rawr';

    rawr.style.left = e.pageX + 'px';
    rawr.style.top = e.pageY + 'px';

    document.body.appendChild(rawr);

    setTimeout(() => rawr.remove(), 1200);
});


const avatar = document.getElementById("avatar");

if (avatar) {
    avatar.style.transition = "transform 0.3s ease";

    avatar.addEventListener("mouseenter", () => {
        avatar.style.transform = "scale(1.1)";
    });

    avatar.addEventListener("mouseleave", () => {
        avatar.style.transform = "scale(1)";
    });
}
