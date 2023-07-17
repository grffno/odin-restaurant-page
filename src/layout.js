import Pizza from './pizza.jpg'


const headline = () => {
    const headline = document.createElement('div');
    headline.classList.add('headline');
    headline.innerHTML = "World's best pizza! Since 1972";
    return headline;
}

const mainImageDiv = () => {
    const mainImageDiv = document.createElement('div');
    mainImageDiv.classList.add('main-image');

    const img = document.createElement('img');
    img.src = Pizza;
    mainImageDiv.appendChild(img);
    return mainImageDiv;
}

const copy = () => {
    const copy = document.createElement('div');
    copy.classList.add('copy');
    copy.innerHTML = `Welcome to Anthony's! Enjoy real, home-style and gourmet
            food at great prices!`
    return copy
}


export {
    headline,
    mainImageDiv, 
    copy
};
