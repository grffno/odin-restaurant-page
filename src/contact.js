export default function contactPage() {
    const contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');

    const address = document.createElement('p');
    address.textContent = '123 Real Street, New York, NY 10101';
    contactDiv.append(address);

    const phone = document.createElement('p');
    phone.textContent = 'Reservations: 123-456-7890';
    contactDiv.append(phone);

    const email = document.createElement('p');
    email.innerHTML = `<a href=mailto:abc@example.com>Email</a>`
    contactDiv.append(email);

    return contactDiv;
}