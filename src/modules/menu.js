export const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')
  const closeBtn = menu.querySelector('.close-btn')
  const menuItems = menu.querySelectorAll('ul>li>a')

  const handMenu = () => { 
      menu.classList.toggle('active-menu')
  }

  menuBtn.addEventListener('click', handMenu)

  closeBtn.addEventListener('click', handMenu)

  menuItems.forEach(menuItem => menuItem.addEventListener('click', handMenu))
}