// function myFunction() {
//     document.getElementById('mobile-menu').style.cssText = 'md:active bg-white py-2 px-4 shadow-lg';
// }
// document.getElementById('i').addEventListener('click', () => {
//   document.getElementById('mobile-menu').classList.add('myClass');

// }); 

// Получаем элементы
const burgerBtn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');

// Функция для открытия/закрытия меню
function toggleMenu() {
  const isHidden = menu.classList.contains('menu-hidden');

  if (isHidden) {
    menu.classList.remove('menu-hidden');
    menu.classList.add('menu-visible');
    burgerBtn.setAttribute('aria-expanded', 'true');
  } else {
    menu.classList.remove('menu-visible');
    menu.classList.add('menu-hidden');
    burgerBtn.setAttribute('aria-expanded', 'false');
  }
}

// Обработчик события
burgerBtn.addEventListener('click', toggleMenu);


// document.getElementById('scrollButton0').addEventListener('click', function() {
//   document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' });
// });
