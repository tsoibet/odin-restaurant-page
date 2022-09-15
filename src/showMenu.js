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
    const breakfastText = document.createElement("div");
    breakfastText.classList.add('text');
    breakfastText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    breakfastBlock.appendChild(breakfastText);
    page.appendChild(breakfastBlock);

    const lunchBlock = document.createElement("div");
    lunchBlock.classList.add('block');
    const lunchTitle = document.createElement("div");
    lunchTitle.classList.add('title');
    lunchTitle.textContent = "Lunch";
    lunchBlock.appendChild(lunchTitle);
    const lunchText = document.createElement("div");
    lunchText.classList.add('text');
    lunchText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    lunchBlock.appendChild(lunchText);
    page.appendChild(lunchBlock);

    const dinnerBlock = document.createElement("div");
    dinnerBlock.classList.add('block');
    const dinnerTitle = document.createElement("div");
    dinnerTitle.classList.add('title');
    dinnerTitle.textContent = "Dinner";
    dinnerBlock.appendChild(dinnerTitle);
    const dinnerText = document.createElement("div");
    dinnerText.classList.add('text');
    dinnerText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    dinnerBlock.appendChild(dinnerText);
    page.appendChild(dinnerBlock);

}