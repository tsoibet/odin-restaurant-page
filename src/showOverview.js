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
    introPhoto.classList.add('photo');
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
    hoursText.classList.add('center');
    hoursText.textContent = "Monday to Friday: 8am - 10pm";
    hoursText.textContent += "\nSaturday and Sunday: 9am - 11pm";
    hoursBlock.appendChild(hoursText);
    page.appendChild(hoursBlock);

    const locationBlock = document.createElement("div");
    locationBlock.classList.add('block');
    const locationTitle = document.createElement("div");
    locationTitle.classList.add('title');
    locationTitle.textContent = "Location";
    locationBlock.appendChild(locationTitle);
    const locationPhoto = document.createElement("div");
    locationPhoto.classList.add('photo');
    locationPhoto.id = "locationPhoto";
    locationBlock.appendChild(locationPhoto);
    const locationText = document.createElement("div");
    locationText.classList.add('text');
    locationText.textContent = "1/F, 1-2-3 Roppongi, Minato city, Tokyo 123-0000";
    locationBlock.appendChild(locationText);
    page.appendChild(locationBlock);

}