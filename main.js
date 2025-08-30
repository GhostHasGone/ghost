// small interactive helpers
// click avatar to change (simple prompt for convenience)
document.getElementById('avatar').addEventListener('click', ()=>{
    const url = prompt('Paste image URL for your avatar (or cancel):');
    if(url) document.getElementById('avatar').style.backgroundImage = `url('${url}')`;
});

// playful keyboard shortcut: press F to cycle favorite music text
const tracks = ['Night Drive — Synthwave', 'Lo-fi Chill', 'Alt/Indie Mix', 'Ambient Coding'];
let t = 0;
window.addEventListener('keydown', e=>{
    if(e.key.toLowerCase() === 'f'){
        t = (t+1)%tracks.length;
        document.querySelectorAll('#favorites .fav p')[0].textContent = tracks[t];
    }
});