import pizzaImg from './assets/pizza.jpg';

export default function homePage() {
    const homeDiv = document.createElement('div');

    const title = document.createElement('h1');
    title.textContent = 'Anthony\'s Pizza & Restaurant'

    const img = document.createElement('img');
    img.src = pizzaImg;
    img.classList.add('splash-img');

    const description = document.createElement('p');
    description.textContent = `Serving the World's best pizza since 1972! 
                                Enjoy real, home-style and gourmet food 
                                in a family setting.`

    homeDiv.appendChild(title);
    homeDiv.appendChild(img);
    homeDiv.appendChild(description);
    return homeDiv;
}