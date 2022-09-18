export default function showMenu() {

    const currentLabel = document.querySelector('.on');
    if (currentLabel) {
        currentLabel.classList.remove('on');
    }

    const label = document.querySelector('#menu');
    label.classList.add('on');

    const page = document.querySelector('.page');
    page.textContent = "";

    const breakfastBlock = document.createElement("div");
    breakfastBlock.classList.add('block');
    const breakfastTitle = document.createElement("div");
    breakfastTitle.classList.add('title');
    breakfastTitle.textContent = "Breakfast";
    breakfastBlock.appendChild(breakfastTitle);
    const breakfastPhoto = document.createElement("div");
    breakfastPhoto.classList.add('photo');
    breakfastPhoto.id = "breakfastPhoto";
    breakfastBlock.appendChild(breakfastPhoto);
    const breakfastText = document.createElement("div");
    breakfastText.classList.add('text');
    breakfastText.textContent = "Sandwitch + French fries + 1 drink, $10";
    breakfastBlock.appendChild(breakfastText);
    page.appendChild(breakfastBlock);

    const lunchBlock = document.createElement("div");
    lunchBlock.classList.add('block');
    const lunchTitle = document.createElement("div");
    lunchTitle.classList.add('title');
    lunchTitle.textContent = "Lunch";
    lunchBlock.appendChild(lunchTitle);
    const lunchPhoto = document.createElement("div");
    lunchPhoto.classList.add('photo');
    lunchPhoto.id = "lunchPhoto";
    lunchBlock.appendChild(lunchPhoto);
    const lunchText = document.createElement("div");
    lunchText.classList.add('text');
    lunchText.textContent = "Soup + Salad + Doria + Grilled beef + Rice + 1 drink, $10";
    lunchBlock.appendChild(lunchText);
    page.appendChild(lunchBlock);

    const dinnerBlock = document.createElement("div");
    dinnerBlock.classList.add('block');
    const dinnerTitle = document.createElement("div");
    dinnerTitle.classList.add('title');
    dinnerTitle.textContent = "Dinner";
    dinnerBlock.appendChild(dinnerTitle);
    const dinnerPhoto = document.createElement("div");
    dinnerPhoto.classList.add('photo');
    dinnerPhoto.id = "dinnerPhoto";
    dinnerBlock.appendChild(dinnerPhoto);
    const dinnerText = document.createElement("div");
    dinnerText.classList.add('text');
    dinnerText.textContent = "Japanese style set meal + 1 drink, $30";
    dinnerBlock.appendChild(dinnerText);
    page.appendChild(dinnerBlock);

}