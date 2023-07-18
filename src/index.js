import navbar from './navbar.js';
import homePage from './home.js';
import menuPage from './menu.js';
import contactPage from './contact.js';
import './style.css';

const load = () => {
    const content = document.getElementById('content');

    // Create a div for displaying individual page contents
    const pageContent = document.createElement('div');
    pageContent.classList.add('page-content')


    const pages = [
        homePage(),
        menuPage(),
        contactPage()
    ];

    const pageLoad = (index) => {
        pageContent.innerHTML = '';
        pageContent.appendChild(pages[index]);
    }

    // Create navigation buttons
    const btns = navbar();

    btns.forEach((btn, index) => btn.addEventListener('click', () => pageLoad(index)));

    content.appendChild(pageContent);
    pageContent.appendChild(homePage());
};

load();