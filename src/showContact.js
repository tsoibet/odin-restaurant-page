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
    reservationText.textContent = "For reservations, please call us on 012 1234 5678.";
    reservationText.textContent += "\n\n* This number is for reservations only.";
    reservationText.textContent += "\nFor other enquiries, please refer to the below section.";
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
    enquiryText.textContent = "For any enquiries other than reversations, please contact us at 123 9876 5432 or norarestaurant@qmail.com.";
    enquiryBlock.appendChild(enquiryText);
    page.appendChild(enquiryBlock);

}