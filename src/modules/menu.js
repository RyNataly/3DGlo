export const menu = () => {
  const menuBtn = document.querySelector('.menu')
  const menu = document.querySelector('menu')

  const handMenu = () => { 
      menu.classList.toggle('active-menu')
  }

  // ДЗ1

  // menu.addEventListener('click', (e) => {
  //     if (e.target.classList.contains('close-btn')) { 
  //         menu.classList.toggle('active-menu')  
  //     } else {
  //         if (e.target.tagName === 'A') {
  //             menu.classList.toggle('active-menu')
  //         }
  //     }
  // })

  // menuBtn.addEventListener('click', handMenu)

// ----------------------
const toggleMenu = () => {
  document.addEventListener('click', (e) => {
      if (menu.classList.contains('active-menu')){   //закрытие открытого окна по клику мимо
          if (!e.target.closest('menu'))
              menu.classList.toggle('active-menu')  
      }

      if (e.target.closest('.menu')){     //открытие окна
          menu.classList.toggle('active-menu') 
      }
      if (e.target.classList.contains('close-btn')) {  //закрытие окна
          menu.classList.toggle('active-menu')  
      } else {
          if (e.target.tagName === 'A' && e.target.closest('menu')) {   //закрытие окна по меню
              menu.classList.toggle('active-menu')
          }
      }
  })
}

toggleMenu()


  // menuItems.forEach(menuItem => menuItem.addEventListener('click', handMenu))

}