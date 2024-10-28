export const check_Form = () => {
    const calcItems = document.querySelectorAll('input.calc-item') 
    const forms = document.querySelectorAll('form[name=user_form]')

    calcItems.forEach(calcItem => calcItem.addEventListener('input', (e) => {
              e.target.value = e.target.value.replace(/\D+/,'')
        })
    )
    
    forms.forEach(form => form.addEventListener('submit', (e) => {
        e.preventDefault()
        const inputText = form.querySelector('input[type=text]') 
        const inputEmail = form.querySelector('input[type=email]')
        const inputTel = form.querySelector('input[type=tel]')
        let isError = false

        if (!/[^а-яА-Я\s\-]/g.test(inputText.value)){
            console.log(inputText.value)
        } else {
            isError = true
            alert('Ошибка  при вводе текстовых данных. Допустимы только буквы кириллицы в любом регистре, символы дефиса и пробела')
        }

        if (!/[^a-zA-Z\@\w\!\~\*\'\-]/g.test(inputEmail.value)){
            // console.log(inputEmail.value)
        } else {
            isError = true
            alert('Ошибка в email адреса')
        }

        if (!/[^\d\(\)\-]/g.test(inputTel.value)){ 

        } else {
            isError = true
            alert('Ошибка при вводе телефона. Допустимы только цифры, скобочки, тире')
        }

        if (e.target.length === 5){
            // const inputMess = form.querySelector('input[class=mess]') 
            if (!/[^а-яА-Я\s\-]/g.test(inputMess.value)) { 
                // console.log(inputMess.value)
            } else {
                isError = true
                alert('Ошибка  при вводе текстовых данных. Допустимы только буквы кириллицы в любом регистре, символы дефиса и пробелах')
            }      
        }

        if (!isError){
            alert('Данные отправлены')
        }
    }))
}