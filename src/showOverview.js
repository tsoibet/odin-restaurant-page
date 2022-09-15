export default function showOverview() {

    const currentLabel = document.querySelector('.on');
    if (currentLabel) {
        currentLabel.classList.remove('on');
    }

    const label = document.querySelector('#overview');
    label.classList.add('on');

    const page = document.querySelector('.page');
    page.textContent = "";

    const introBlock = document.createElement("div");
    introBlock.classList.add('block');
    const introTitle = document.createElement("div");
    introTitle.classList.add('title');
    introTitle.textContent = "Intro";
    introBlock.appendChild(introTitle);
    const introPhoto = document.createElement("div");
    introPhoto.id = "introPhoto";
    introBlock.appendChild(introPhoto);
    const introText = document.createElement("div");
    introText.classList.add('text');
    introText.textContent = "A doggo friendly restaurant";
    introBlock.appendChild(introText);
    page.appendChild(introBlock);

    const hoursBlock = document.createElement("div");
    hoursBlock.classList.add('block');
    const hoursTitle = document.createElement("div");
    hoursTitle.classList.add('title');
    hoursTitle.textContent = "Hours";
    hoursBlock.appendChild(hoursTitle);
    const hoursText = document.createElement("div");
    hoursText.classList.add('text');
    hoursText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    hoursBlock.appendChild(hoursText);
    page.appendChild(hoursBlock);

    const locationBlock = document.createElement("div");
    locationBlock.classList.add('block');
    const locationTitle = document.createElement("div");
    locationTitle.classList.add('title');
    locationTitle.textContent = "Location";
    locationBlock.appendChild(locationTitle);
    const locationText = document.createElement("div");
    locationText.classList.add('text');
    locationText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    locationBlock.appendChild(locationText);
    page.appendChild(locationBlock);

}