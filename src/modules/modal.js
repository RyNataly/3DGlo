import {animate} from './helpers'

export const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalBlock = modal.querySelector('.popup-content')
    const height = document.documentElement.clientHeight * 0.1
    let topBlock = height * 20 
    let idInterval

    // const animate = () => {
    //     idInterval = requestAnimationFrame(animate)
    //     topBlock = topBlock - 20
       
    //     if (modalBlock.offsetTop > height) {
    //         modalBlock.style.top = topBlock + 'px'
    //     } else {
    //         cancelAnimationFrame(idInterval)
    //     }
    // }
    const animating = () => {
        animate({
            duration: 400,
            timing(timeFraction) {
                return timeFraction;
            },
            draw(progress) {
                modalBlock.style.top = (topBlock * (1 - progress) + height) + 'px'
            }
        });
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            const width = document.documentElement.clientWidth
            if (width > 768) {
                topBlock = height * 10
                modalBlock.style.top = topBlock + 'px'
                animating()
            } else {
                modalBlock.style.top = height
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if(!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')){
            modal.style.display = 'none'    
        }

    })
}