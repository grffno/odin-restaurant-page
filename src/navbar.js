export default function navbar() {
    const navDiv = document.createElement('div');
    navDiv.classList.add('nav');

    const btns = [];

    const btnFactory = (name) => {
        const btn = document.createElement('button');
        btn.textContent = name;
        btn.classList.add('navbtn')
        navDiv.appendChild(btn);
        btns.push(btn);
    }

    btnFactory('Home');
    btnFactory('Menu');
    btnFactory('Contact');

    content.appendChild(navDiv);

    return btns;
}
