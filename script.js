/////////////////////////////////////////
//            SLICK-SWIPER            //
////////////////////////////////////////


$(document).ready(function () {
  $('.slick-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    asNavFor: '.slick-wrapper-low',
    waitForAnimate: false
  });
  $('.slick-wrapper-low').slick({
    slidesToShow: 4.999,
    slidesToScroll: 1,
    asNavFor: '.slick-wrapper',
    arrows: false,
    centerMode: false,
    focusOnSelect: true,
    infinite: false,
    draggable: false,
    waitForAnimate: false
  });
});

/////////////////////////////////////////
//            CHANGE COLOR            //
////////////////////////////////////////


let radios = document.querySelectorAll('.product-color input[type="radio"]')
let labels = document.querySelectorAll('.product-colored')
let lastClicked = labels[0];


for (let label of labels) {
  label.addEventListener('click', function () {
    for (let radio of radios) {
      if (radio.checked) {
        lastClicked.classList.remove('product-color__active')
        lastClicked.classList.add('product-color__no-active')
        this.classList.add('product-color__active')
        this.classList.remove('product-color__no-active')
        lastClicked = this;
        sss = lastClicked
      }
    }
  })
}

/////////////////////////////////////////
//            CHANGE IMG              //
////////////////////////////////////////

let images = document.querySelectorAll('.slick-slide img')
let imagesLow = document.querySelectorAll('.slick-slide-low img')

function check_value(event) {
  for (let i = 0; i < images.length; i++) {
    images[i].src = `image/backpack/${event.target.value}/backpack-${i + 1}-${event.target.value}.jpg`
    imagesLow[i].src = `image/backpack/${event.target.value}/backpack-${i + 1}-low-${event.target.value}.jpg`
  }
}

/////////////////////////////////////////
//            BUTTONS                 //
////////////////////////////////////////


let btnCart = document.querySelector('.product-action .cart');
let cartCurrent = document.querySelector('.navbar__links .cart span');
let cartCurrentFooter = document.querySelector('.product-footer__cart span');

let btnFavorite = document.querySelector('.product-action .favorite');
let favoriteCurrent = document.querySelector('.navbar__links .like span');
let favoriteCurrentFooter = document.querySelector('.product-footer__favorite span');

function increaseNumber(btn, headerCurrent, footerCurrent) {
  btn.addEventListener('click', function () {
    headerCurrent.innerHTML = +headerCurrent.innerHTML + 1
    footerCurrent.innerHTML = +footerCurrent.innerHTML + 1
  })
}

increaseNumber(btnCart, cartCurrent, cartCurrentFooter);
increaseNumber(btnFavorite, favoriteCurrent, favoriteCurrentFooter);

let srcImg = document.querySelector('.modal-body .img img')
let img = document.querySelector('.slick-slide-low img:first-child')

let title = document.querySelector('.product-info__title')
let prodName = document.querySelector('.description p span:first-child')

let sss = lastClicked
let colorProd = document.querySelector('.description .colProd')

btnCart.addEventListener('click', function () {
  let color = lastClicked.querySelector('.name-color')
  srcImg.src = img.src
  prodName.innerHTML = title.innerHTML
  colorProd.innerHTML = color.innerHTML
})


let reg = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
reg2 = /^[A-z0-9._-]+@[A-z0-9.-]+\.[A-z]{2,4}$/;
reg3 = /[0-9]/;
reg4 = /[A-Za-zА-Яа-яЁё0-9]/;
reg5 = /(?=^.{6,}$)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[^A-Za-z0-9]).*/

let inpLogin = document.querySelector('.form-control__userLogin');
let inpPass = document.querySelector('.form-control__userPass');
let inpEmail = document.querySelector('.form-control__userEmail');
let inpTel = document.querySelector('.form-control__userPhone');
let message = document.querySelector('.message')
let submBtn = document.querySelector('.btn__subm')

submBtn.addEventListener('click', function (e) {
  e.preventDefault();
  if (!validate(reg4, inpLogin.value) && inpLogin.value != '') {
    notValid(inpLogin, message, 'Введите корректный логин')
  } else if (inpLogin.value == '') {
    emptyValue(inpLogin, message, 'Поле не может быть пустым')
  } else {
    valid(inpLogin, message, '')
  }

  if (!validate(reg5, inpPass.value) && inpPass.value != '') {
    notValid(inpPass, message, 'Введите корректный пароль')
  } else if (inpPass.value == '') {
    emptyValue(inpPass, message, 'Поле не может быть пустым')
  } else {
    valid(inpPass, message, '')
  }

  if (!validate(reg2, inpEmail.value) && inpEmail.value != '') {
    notValid(inpEmail, message, 'Введите корректный email')
  } else if (inpEmail.value == '') {
    emptyValue(inpEmail, message, 'Поле не может быть пустым')
  } else {
    valid(inpEmail, message, '')
  }
  if (!validate(reg, inpTel.value) && inpTel.value != '') {
    notValid(inpTel, message, 'Введите корректный телефон')
  } else if (inpTel.value == '') {
    emptyValue(inpTel, message, 'Поле не может быть пустым')
  } else {
    valid(inpTel, message, '')
  }
})

function validate(regex, inp) {
  return regex.test(inp)
}

function notValid(inp, el, mess) {
  inp.classList.add('is-invalid');
  el.innerHTML = mess
}

function emptyValue(inp, el, mess) {
  inp.classList.add('is-invalid');
  el.innerHTML = mess
}

function valid(inp, el, mess) {
  inp.classList.remove('is-invalid');
  inp.classList.add('is-valid');
  el.innerHTML = mess

}

let helper = document.querySelector('.helper')
inpPass.addEventListener('focus', function () {
  helper.style.display = 'block'
})
inpPass.addEventListener('blur', function () {
  helper.style.display = 'none'
})


















