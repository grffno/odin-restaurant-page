import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';

function navbar() {

    const pageContent = document.createElement('div');
    content.appendChild(pageContent);
    pageContent.appendChild(homePage());

    const btns = [];
    const pages = [
        homePage,
        menuPage,
        contactPage
    ];

    const btnFactory = (name) => {
        const btn = document.createElement('button');
        btn.textContent = name;
        btn.classList.add('navbtn')
        content.appendChild(btn);
        btns.push(btn);
    }

    const pageLoad = (index) => {
        pageContent.innerHTML = '';
        pageContent.appendChild(pages[index]());
    }

    btnFactory('Home');
    btnFactory('Menu');
    btnFactory('Contact');

    btns.forEach((btn, index) => btn.addEventListener('click', () => pageLoad(index)));
}
