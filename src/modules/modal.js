export const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const modalBlock = modal.querySelector('.popup-content')
    const height = document.documentElement.clientHeight * 0.1
    let topBlock = height * 10 
    let idInterval

    const animate = () => {
        idInterval = requestAnimationFrame(animate)
        topBlock = topBlock - 10
       
        if (modalBlock.offsetTop > height) {
            modalBlock.style.top = topBlock + 'px'
        } else {
            cancelAnimationFrame(idInterval)
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            modalBlock.style.top = topBlock + 'px'
            animate()   
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none'
    })
}