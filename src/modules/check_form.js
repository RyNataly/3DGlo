export const check_Form = () => {
    const calcItems = document.querySelectorAll('input.calc-item') 
    const forms = document.querySelectorAll('form[name=user_form]')

    calcItems.forEach(calcItem => calcItem.addEventListener('input', (e) => {
              e.target.value = e.target.value.replace(/\D+/,'')
        })
    )

    forms.forEach(form => {
        const inputText = form.querySelector('input[type=text]')
        inputText.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я\s]/,'')
            })

        const inputEmail = form.querySelector('input[type=email]')
        inputEmail.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^\w\d\-\.\@]/,'')
            })

        const inputTel = form.querySelector('input[type=tel]')
        inputTel.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^\d\-\+\(\)]/,'')
            })

        const inputMess = form.querySelector('input[class=mess]') 
        if (inputMess){
            inputMess.addEventListener('input', (e) => {
                e.target.value = e.target.value.replace(/[^а-яА-Я\s\d\\.,!?]/,'')
            })    
        }     
    })

    
    forms.forEach(form => form.addEventListener('submit', (e) => {
        e.preventDefault()
        const inputText = form.querySelector('input[type=text]') 
        const inputEmail = form.querySelector('input[type=email]')
        const inputTel = form.querySelector('input[type=tel]')

        if (inputEmail.value){
            inputEmail.classList.add("success");
        } else {
            inputEmail.classList.remove("success");
        }

        if (inputText.value){
            inputText.classList.add("success");
        } else {
            inputText.classList.remove("success");
        }

        if (inputTel.value){
            inputTel.classList.add("success");
        } else {
            inputTel.classList.remove("success");
        }

        if (e.target.length === 5){
            const inputMess = form.querySelector('input[class=mess]') 
            if (inputMess.value){
                inputMess.classList.add("success");
            } else {
                inputMess.classList.remove("success");
            }  
        }

    }))
}