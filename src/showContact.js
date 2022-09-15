export default function showContact() {

    const currentLabel = document.querySelector('.on');
    if (currentLabel) {
        currentLabel.classList.remove('on');
    }

    const label = document.querySelector('#contact');
    label.classList.add('on');

    const page = document.querySelector('.page');
    page.textContent = "";

    const reservationBlock = document.createElement("div");
    reservationBlock.classList.add('block');
    const reservationTitle = document.createElement("div");
    reservationTitle.classList.add('title');
    reservationTitle.textContent = "Reservation";
    reservationBlock.appendChild(reservationTitle);
    const reservationText = document.createElement("div");
    reservationText.classList.add('text');
    reservationText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    reservationBlock.appendChild(reservationText);
    page.appendChild(reservationBlock);

    const enquiryBlock = document.createElement("div");
    enquiryBlock.classList.add('block');
    const enquiryTitle = document.createElement("div");
    enquiryTitle.classList.add('title');
    enquiryTitle.textContent = "Other Enquiries";
    enquiryBlock.appendChild(enquiryTitle);
    const enquiryText = document.createElement("div");
    enquiryText.classList.add('text');
    enquiryText.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    enquiryBlock.appendChild(enquiryText);
    page.appendChild(enquiryBlock);

}