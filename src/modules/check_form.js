export const check_form = () => {
    const calcItems = document.querySelectorAll('input.calc-item') 
    const forms = document.querySelectorAll('form[name=user_form]')
    const inputText = forms[0].querySelector('input[type=text]') 
    const inputEmail = forms[0].querySelector('input[type=email]')
    const inputTel = forms[0].querySelector('input[type=tel]')
    //const inputText2 = forms[0].querySelectorAll('input[placeholder=Ваше сообщение]')

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
            alert('Ошибка в вводе данных')
        }

        if (!/[^a-zA-Z\@\w\!\~\*\'\-]/g.test(inputEmail.value)){
            console.log(inputEmail.value)
        } else {
            isError = true
            alert('Ошибка в вводе данных')
        }

        if (!/[^\d\(\)\-]/g.test(inputTel.value)){ 
            console.log(inputTel.value)
        } else {
            isError = true
            alert('Ошибка в вводе данных')
        }

        if (e.target.length === 5){
            const inputMess = form.querySelector('input[class=mess]') 
            if (!/[^а-яА-Я\s\-]/g.test(inputMess.value)) { 
                console.log(inputMess.value)
            } else {
                isError = true
                alert('Ошибка в вводе данных')
            }      
        }


        if (!isError){
            alert('Данные отправлены')
        }
    }))

    // forms[0].addEventListener('submit', (e) => {
    //     e.preventDefault()
    //     let isError = false

    //     if (!/[^а-яА-Я\-\s]/g.test(inputText.value)){
    //         console.log(inputText.value)
    //     } else {
    //         isError = true
    //     }

    //     if (!/[^a-zA-Z\@\-\w\!\~\*\']/g.test(inputEmail.value)){
    //         console.log(inputEmail.value)
    //     } else {
    //         isError = true
    //     }

    //     if (!/[^\d\(\)\-]/g.test(inputTel.value)){ ///[^\d]\(\)\-/g
    //         console.log(inputTel.value)
    //     } else {
    //         isError = true
    //     }

        
    // })

    console.log(forms)
    console.log(inputText)

}