let buttonBuy = document.querySelectorAll('.product_link_buy');
let popupBasket = document.querySelector('.modal_basket');
let buttonBasketClose = popupBasket.querySelector('.modal_close');

let buttonClick = function (button, popup) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.add('modal_show');
  });
};

let buttonClose = function (button, popup) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    popup.classList.remove('modal_show');
  });
};

let keyClose = function (popup) {
  window.addEventListener('keydown', function (evt){
    if (evt.key === 'Escape') {
      popup.classList.remove('modal_show');
    }
  });
}

for( let i = 0; i < buttonBuy.length; i++) {
  buttonClick(buttonBuy[i], popupBasket);
}
buttonClose(buttonBasketClose, popupBasket);
keyClose(popupBasket);

let popupWriteUs = document.querySelector('.modal_write_us');
let buttonInformation = document.querySelector('.button_map');
let buttonInformationClose = popupWriteUs.querySelector('.modal_close');

let popupMap = document.querySelector('.modal_map');
let buttonMap = document.querySelector('.information_map');
let buttonMapClose = popupMap.querySelector('.modal_close');

let buttonDelivery = document.querySelector('.button_delivery');
let buttonWarranty = document.querySelector('.button_warranty');
let buttonCredit = document.querySelector('.button_credit');
let deliveryService = document.querySelector('.delivery_slider');
let warrantyService = document.querySelector('.warranty_slider');
let creditService = document.querySelector('.credit_slider');

let gallery = document.querySelector('.gallery');
let switchLeft = gallery.querySelector('.switch_left');
let switchRight = gallery.querySelector('.switch_right');
let slideControlLeft = gallery.querySelector('.slider_control_left');
let slideControlRight = gallery.querySelector('.slider_control_right');
let perforates = gallery.querySelector('.slide_perforates');
let drill = gallery.querySelector('.slide_drill');

let writeUsForm = popupWriteUs.querySelector('.modal_container');
let formName = writeUsForm.querySelector('.input_name');
let formEmail = writeUsForm.querySelector('.input_email');
let formText = writeUsForm.querySelector('.input_text_container');

buttonClick(buttonInformation, popupWriteUs);
buttonClose(buttonInformationClose, popupWriteUs);
keyClose(popupWriteUs);

buttonClick(buttonMap, popupMap);
buttonClose(buttonMapClose, popupMap);
keyClose(popupMap);

let servicesButton = function (button, service) {
  button.addEventListener('click', function (evt) {
    evt.preventDefault();
    if (warrantyService.classList.contains('current_slider')) {
      warrantyService.classList.remove('current_slider');
      buttonWarranty.classList.remove('services_link_active');
      buttonWarranty.classList.add('services_link_free');
    }
    if (creditService.classList.contains('current_slider')) {
      creditService.classList.remove('current_slider');
      buttonCredit.classList.remove('services_link_active');
      buttonCredit.classList.add('services_link_free');
    }
    if (deliveryService.classList.contains('current_slider')) {
      deliveryService.classList.remove('current_slider');
      buttonDelivery.classList.remove('services_link_active');
      buttonDelivery.classList.add('services_link_free');
    }
    service.classList.add('current_slider');
    button.classList.remove('services_link_free');
    button.classList.add('services_link_active');
  });
};

servicesButton(buttonDelivery, deliveryService);
servicesButton(buttonWarranty, warrantyService);
servicesButton(buttonCredit, creditService);

let sliderSwitch = function (button) {
  button.addEventListener('click', function (evt){
    evt.preventDefault();
    if (gallery.classList.contains('slide_background_perforates')) {
      gallery.classList.remove('slide_background_perforates');
      gallery.classList.add('slide_background_drill');
      slideControlRight.classList.remove('current');
      slideControlLeft.classList.add('current');
      perforates.classList.remove('slide_current');
      drill.classList.add('slide_current');
    } else {
      gallery.classList.remove('slide_background_drill');
      gallery.classList.add('slide_background_perforates');
      slideControlLeft.classList.remove('current');
      slideControlRight.classList.add('current');
      perforates.classList.add('slide_current');
      drill.classList.remove('slide_current');
    }
    console.log('работает');
  });
};

sliderSwitch(switchLeft);
sliderSwitch(switchRight);

writeUsForm.addEventListener('submit', function (evt) {
  if (!formName.value || !formEmail.value || !formText.value) {
    console.log(formText.value);
    console.log(formName.value);
    console.log(formEmail.value);
    evt.preventDefault();
  }
});
