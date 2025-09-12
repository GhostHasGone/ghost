document.addEventListener('click', (e) => {
    // create the element
    const rawr = document.createElement('div');
    rawr.textContent = 'rawr!';
    rawr.className = 'rawr';

    // position at click
    rawr.style.left = e.pageX + 'px';
    rawr.style.top = e.pageY + 'px';

    document.body.appendChild(rawr);

    // remove after animation
    setTimeout(() => rawr.remove(), 1200);
});

