export default function pageLoad() {
    const content = document.querySelector('#content');

    const header = document.createElement("div");
    header.classList.add('header');
    const restaurantName = document.createElement("div")
    restaurantName.classList.add('name');
    restaurantName.textContent = "Nora Restaurant";
    header.appendChild(restaurantName);
    content.appendChild(header);

    const pages = document.createElement("div");
    pages.classList.add('pages');

    const labels = document.createElement("div");
    labels.classList.add('labels');
    const overview = document.createElement("div");
    overview.id = "overview";
    overview.classList.add('label');
    overview.textContent = "Overview";
    labels.appendChild(overview);
    const menu = document.createElement("div");
    menu.id = "menu";
    menu.classList.add('label');
    menu.textContent = "Menu";
    labels.appendChild(menu);
    const contact = document.createElement("div");
    contact.id = "contact";
    contact.classList.add('label');
    contact.textContent = "Contact Us";
    labels.appendChild(contact);
    pages.appendChild(labels);

    const page = document.createElement("div");
    page.classList.add('page');
    pages.appendChild(page);
    content.appendChild(pages);

    const footer = document.createElement("div");
    footer.classList.add('footer');
    footer.textContent = "Nora Restaurant";
    content.appendChild(footer);
}