export default function menuPage() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menu');

    const menuItemFactory = (section, arr) => {
        const lst = document.createElement('ul');
        lst.textContent = section.toUpperCase();
        menuDiv.appendChild(lst);

        arr.forEach(item => {
            const lstItem = document.createElement('li');
            lstItem.textContent = item;
            lst.appendChild(lstItem);
        });
    }

    const antipastiArray = [
        'Fresh Baked Foccacia - $1',
        'Italian Olives - $2',
        'Pappa Al Pomodoro - $3'
    ]

    const pizzaArray = [
        'Margherita - $5',
        'Bufala - $6',
        'Salsiccia - $7'
    ]

    const pastaArray = [
        'Cacio E Pepe - $3',
        'Agnolotti - $4',
        'Rigatoni Alla Alberto - $5'
    ]

    menuItemFactory('antipasti', antipastiArray);
    menuItemFactory('pizza', pizzaArray);
    menuItemFactory('pasta', pastaArray);


    return menuDiv;
}